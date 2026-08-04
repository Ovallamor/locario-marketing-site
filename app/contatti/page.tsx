// app/contatti/page.tsx

import type { Metadata } from 'next'
import { generateMetadata as genMeta, buildContactPageSchema } from '@/lib/seo'
import { JsonLd } from '@/components/JsonLd'
import { ContactForm } from '@/components/ContactForm'
import { TrialCTA } from '@/components/TrialCTA'
import { TrialLink } from '@/components/TrialLink'
import { Mail, Clock } from 'lucide-react'
import { LINKS } from '@/lib/constants'

export const metadata: Metadata = genMeta({
  title: 'Contatti Locario | Parla con Noi',
  description:
    'Hai domande su Locario? Vuoi capire se è adatto alla tua attività? Scrivici. Rispondiamo entro 24 ore.',
  path: '/contatti',
  keywords: ['contatti locario', 'assistenza gestionale prenotazioni', 'supporto locario'],
})

export default function ContattiPage() {
  return (
    <>
      <JsonLd schema={buildContactPageSchema()} />
      {/* HERO */}
      <section
        className="section-padding pt-36 lg:pt-44"
        style={{ background: '#050816' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Parlaci della tua{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              attività
            </span>
          </h1>

          <p className="text-lg leading-relaxed max-w-xl mx-auto mb-6" style={{ color: '#A1A1AA' }}>
            Hai domande su Locario? Vuoi capire se fa al caso tuo? Compila il form e ti
            ricontattiamo entro 24 ore.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Info colonna sinistra */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-6">Come possiamo aiutarti</h2>

              <div className="space-y-6">
                <div
                  className="flex items-start gap-4 rounded-2xl p-5"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(108, 99, 255, 0.15)', color: '#6C63FF' }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Email diretta</p>
                    <a
                      href={`mailto:${LINKS.email}`}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: '#A1A1AA' }}
                    >
                      {LINKS.email}
                    </a>
                  </div>
                </div>

                <div
                  className="flex items-start gap-4 rounded-2xl p-5"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22C55E' }}
                  >
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Tempo di risposta</p>
                    <p className="text-sm" style={{ color: '#A1A1AA' }}>
                      Rispondiamo entro 24 ore in giorni lavorativi.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="mt-8 rounded-2xl p-6"
                style={{
                  background: 'rgba(108, 99, 255, 0.08)',
                  border: '1px solid rgba(108, 99, 255, 0.2)',
                }}
              >
                <p className="text-sm font-bold text-white mb-2">
                  Vuoi provare subito senza aspettare?
                </p>
                <p className="text-sm mb-4" style={{ color: '#A1A1AA' }}>
                  Registrati e inizia la prova gratuita di 30 giorni. Nessuna carta richiesta.
                </p>
                <TrialLink
                  source="contatti-sidebar"
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: '#6C63FF' }}
                >
                  Inizia la prova gratis
                </TrialLink>
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold text-white mb-4">
                  Locario è adatto per:
                </p>
                <ul className="space-y-2">
                  {[
                    'Ristoranti e trattorie',
                    'Pizzerie',
                    'Parrucchieri e barber shop',
                    'Centri estetici e spa',
                    'Studi professionali',
                    'Qualsiasi attività con appuntamenti',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-green-500">&#10003;</span>
                      <span className="text-sm" style={{ color: '#A1A1AA' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <TrialCTA />
    </>
  )
}
