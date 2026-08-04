// components/Analytics.tsx
// GA4 (top-of-funnel: visite, click CTA) + banner di consenso cookie GDPR.
// GA4 si carica solo dopo consenso esplicito — il sito non ha mai avuto
// cookie di analisi prima d'ora, quindi il banner è a corredo, non opzionale.
'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const CONSENT_KEY = 'locario_cookie_consent'

type Consent = 'granted' | 'denied' | null

export function Analytics() {
  const [consent, setConsent] = useState<Consent>(null)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY)
    if (stored === 'granted' || stored === 'denied') setConsent(stored)
    setHydrated(true)
  }, [])

  function choose(value: 'granted' | 'denied') {
    window.localStorage.setItem(CONSENT_KEY, value)
    setConsent(value)
  }

  return (
    <>
      {GA_ID && consent === 'granted' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { linker: { domains: ['locario.net', 'app.locario.net'] } });
            `}
          </Script>
        </>
      )}

      {hydrated && consent === null && (
        <div
          role="dialog"
          aria-label="Consenso cookie"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 rounded-2xl p-5"
          style={{
            background: '#0B1220',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
          }}
        >
          <p className="text-sm leading-relaxed mb-4" style={{ color: '#D4D4D8' }}>
            Usiamo cookie di analisi per capire come viene usato il sito e migliorarlo. Puoi accettarli o
            rifiutarli — la navigazione funziona comunque.{' '}
            <a href="/privacy" className="underline" style={{ color: '#00D4FF' }}>
              Privacy Policy
            </a>
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => choose('denied')}
              className="flex-1 py-2.5 rounded-lg text-sm font-medium transition-all duration-150"
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'white', background: 'transparent' }}
            >
              Rifiuta
            </button>
            <button
              onClick={() => choose('granted')}
              className="flex-1 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-150"
              style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)' }}
            >
              Accetta
            </button>
          </div>
        </div>
      )}
    </>
  )
}
