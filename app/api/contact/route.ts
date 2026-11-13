import { createHmac, randomUUID } from 'node:crypto'
import { NextRequest, NextResponse } from 'next/server'

const attempts = new Map<string, { count: number; resetAt: number }>()

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

function esc(value: string) {
  return value.replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character] ?? character)
}

// Inoltra la richiesta a Brigata (CRM commerciale): nasce il lead, parte l'email di benvenuto con il questionario e il link per fissare la call.
// La richiesta e FIRMATA da qui (il segreto resta sul server, mai nel browser). Non deve MAI rompere il form: ogni errore viene ignorato
// e l'email gia esistente verso reservation@locario.net parte comunque. Se le variabili non sono impostate non fa nulla.
async function forwardToBrigata(lead: {
  nome: string; cognome: string; email: string; telefono: string; nomeAttivita: string
  tipoAttivita: string; sitoWeb: string; interesse: string; messaggio: string; page: string
}) {
  const url = process.env.BRIGATA_URL
  const key = process.env.BRIGATA_FORM_KEY
  const secret = process.env.BRIGATA_FORM_SECRET
  if (!url || !key || !secret) return
  try {
    const details = [
      lead.interesse && `Interesse: ${lead.interesse}`,
      `Attività: ${lead.nomeAttivita} (${lead.tipoAttivita})`,
      lead.sitoWeb && `Sito/social: ${lead.sitoWeb}`,
      `Messaggio: ${lead.messaggio}`,
    ].filter(Boolean).join('\n')
    const raw = JSON.stringify({
      name: `${lead.nome} ${lead.cognome}`.trim().slice(0, 120),
      email: lead.email,
      ...(lead.telefono ? { phone: lead.telefono.slice(0, 40) } : {}),
      company: lead.nomeAttivita.slice(0, 160),
      message: details.slice(0, 2000),
      consent: true, // il modulo non parte senza la casella privacy
      page: lead.page.slice(0, 300),
      idempotencyKey: randomUUID(),
    })
    const t = Math.floor(Date.now() / 1000)
    const v1 = createHmac('sha256', secret).update(`${t}.${raw}`).digest('hex')
    const res = await fetch(`${url.replace(/\/$/, '')}/api/inbound/${encodeURIComponent(key)}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-asp-signature': `t=${t},v1=${v1}` },
      body: raw,
      signal: AbortSignal.timeout(5000),
    })
    if (!res.ok) console.error('[contact] Brigata ha risposto', res.status)
  } catch (cause) {
    console.error('[contact] Brigata non raggiungibile', cause instanceof Error ? cause.message : cause)
  }
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin')
  const expectedOrigin = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://locario.net').origin
  if (origin && origin !== expectedOrigin && !origin.startsWith('http://localhost:')) {
    return NextResponse.json({ error: 'Origine non autorizzata.' }, { status: 403 })
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  const now = Date.now()
  const attempt = attempts.get(ip)
  if (attempt && attempt.resetAt > now && attempt.count >= 5) {
    return NextResponse.json({ error: 'Troppe richieste. Riprova tra qualche minuto.' }, { status: 429 })
  }
  attempts.set(ip, attempt && attempt.resetAt > now
    ? { ...attempt, count: attempt.count + 1 }
    : { count: 1, resetAt: now + 10 * 60_000 })

  let body: Record<string, unknown>
  try { body = await request.json() as Record<string, unknown> }
  catch { return NextResponse.json({ error: 'Richiesta non valida.' }, { status: 400 }) }

  if (clean(body.websiteCompany, 100)) return NextResponse.json({ ok: true })

  const nome = clean(body.nome, 80)
  const cognome = clean(body.cognome, 80)
  const email = clean(body.email, 160).toLowerCase()
  const telefono = clean(body.telefono, 40)
  const nomeAttivita = clean(body.nomeAttivita, 120)
  const tipoAttivita = clean(body.tipoAttivita, 80)
  const sitoWeb = clean(body.sitoWeb, 300)
  const interesse = clean(body.interesse, 160)
  const messaggio = clean(body.messaggio, 3000)
  const privacy = body.privacy === true

  if (!nome || !cognome || !nomeAttivita || !tipoAttivita || !messaggio || !privacy || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: 'Controlla i campi obbligatori e riprova.' }, { status: 422 })
  }

  void forwardToBrigata({ nome, cognome, email, telefono, nomeAttivita, tipoAttivita, sitoWeb, interesse, messaggio, page: request.headers.get('referer') ?? `${expectedOrigin}/contatti` })

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return NextResponse.json({ error: 'Invio temporaneamente non disponibile. Scrivi a reservation@locario.net.' }, { status: 503 })

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? 'Locario <noreply@locario.net>',
      to: [process.env.CONTACT_TO_EMAIL ?? 'reservation@locario.net'],
      reply_to: email,
      subject: `Nuova richiesta ${interesse || 'dal sito'} - ${nomeAttivita}`,
      html: `<h2>Nuova richiesta da locario.net</h2>
        <p><strong>Contatto:</strong> ${esc(nome)} ${esc(cognome)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Telefono:</strong> ${esc(telefono || 'Non indicato')}</p>
        <p><strong>Attività:</strong> ${esc(nomeAttivita)} (${esc(tipoAttivita)})</p>
        <p><strong>Servizio:</strong> ${esc(interesse || 'Non indicato')}</p>
        <p><strong>Sito/social:</strong> ${esc(sitoWeb || 'Non indicato')}</p>
        <p><strong>Messaggio:</strong><br>${esc(messaggio).replace(/\n/g, '<br>')}</p>`,
    }),
  })

  if (!response.ok) {
    console.error('[contact] Resend error', response.status, await response.text())
    return NextResponse.json({ error: 'Invio non riuscito. Scrivi a reservation@locario.net.' }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}
