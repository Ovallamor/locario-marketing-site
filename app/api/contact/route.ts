import { NextRequest, NextResponse } from 'next/server'

const attempts = new Map<string, { count: number; resetAt: number }>()

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

function esc(value: string) {
  return value.replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character] ?? character)
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
