import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = process.env.SAAS_CHECKOUT_SECRET
  const saasUrl = process.env.LOCARIO_SAAS_URL ?? 'https://app.locario.net'
  if (!secret) return NextResponse.json({ error: 'Il pagamento online è in configurazione. Contattaci per completare la richiesta.' }, { status: 503 })

  let body: unknown
  try { body = await request.json() } catch { return NextResponse.json({ error: 'Richiesta non valida.' }, { status: 400 }) }

  // Il SaaS vede solo il nostro server: gli passiamo l'IP vero del cliente per limiti e anti-bot.
  const customerIp = request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? request.headers.get('x-real-ip') ?? ''

  try {
    const response = await fetch(`${saasUrl}/api/public/website-orders/checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-locario-checkout-secret': secret, 'x-locario-client-ip': customerIp },
      body: JSON.stringify(body),
      cache: 'no-store',
    })
    const result = await response.json()
    return NextResponse.json(result, { status: response.status })
  } catch {
    return NextResponse.json({ error: 'Il servizio di pagamento non è raggiungibile. Riprova tra poco.' }, { status: 502 })
  }
}
