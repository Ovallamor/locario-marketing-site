// app/come-funziona/page.tsx

import type { Metadata } from 'next'
import { generateMetadata as genMeta, buildHowToSchema } from '@/lib/seo'
import { TrialCTA } from '@/components/TrialCTA'
import { JsonLd } from '@/components/JsonLd'
import { TrialLink } from '@/components/TrialLink'
import { ArrowRight, Check } from 'lucide-react'
import { STEPS } from '@/lib/constants'
import {
  UserPlus,
  Settings,
  Share2,
  CalendarCheck,
  BarChart3,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const metadata: Metadata = genMeta({
  title: 'Come Funziona | Gestionale Prenotazioni in 5 Step',
  description:
    'Scopri come funziona Locario in 5 semplici passi: crea account, configura attività, condividi il link, ricevi prenotazioni ordinate e analizza i risultati. Setup in 5 minuti.',
  path: '/come-funziona',
  keywords: [
    'come funziona locario',
    'setup gestionale prenotazioni',
    'iniziare prenotazioni online',
    'configurare gestionale attività',
  ],
})

const iconMap: Record<string, LucideIcon> = {
  UserPlus,
  Settings,
  Share2,
  CalendarCheck,
  BarChart3,
}

const reassurancePoints = [
  'Nessuna installazione: funziona da browser su qualsiasi dispositivo',
  'Nessuna competenza tecnica richiesta: il pannello è semplice e intuitivo',
  'Assistenza inclusa: se hai dubbi, siamo disponibili via email',
  'Setup in meno di 5 minuti: sei operativo subito',
  'Nessun vincolo: puoi smettere quando vuoi senza penali',
]

export default function ComeFunzionaPage() {
  return (
    <>
      <JsonLd schema={buildHowToSchema(STEPS)} />
      {/* HERO */}
      <section
        className="section-padding pt-36 lg:pt-44"
        style={{ background: '#050816' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Inizia a gestire prenotazioni in modo intelligente{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              in 5 passi
            </span>
          </h1>
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: '#A1A1AA' }}>
            Nessuna configurazione complicata. Nessun corso da seguire. Sei operativo in meno di 5
            minuti.
          </p>
        </div>
      </section>

      {/* 5 STEPS */}
      <section className="section-padding" style={{ background: '#0B1020' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Linea verticale connettore (desktop only) */}
            <div
              className="hidden lg:block absolute left-[27px] top-14 bottom-14 w-0.5"
              style={{ background: 'linear-gradient(180deg, #6C63FF, #00D4FF)' }}
            />

            <div className="space-y-10">
              {STEPS.map((step, i) => {
                const Icon = iconMap[step.icon]

                return (
                  <div key={step.number} className="flex gap-6 lg:gap-10 items-start">
                    {/* Numero + icona */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-2">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center z-10 relative"
                        style={{
                          background:
                            i === 0
                              ? 'linear-gradient(135deg, #6C63FF, #00D4FF)'
                              : 'rgba(108, 99, 255, 0.15)',
                          border: i === 0 ? 'none' : '1px solid rgba(108, 99, 255, 0.3)',
                          color: 'white',
                        }}
                      >
                        {Icon && <Icon size={22} />}
                      </div>
                      <span
                        className="text-xs font-bold"
                        style={{
                          background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Contenuto */}
                    <div
                      className="flex-1 rounded-2xl p-6"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <h2 className="text-xl font-bold text-white mb-2">{step.title}</h2>
                      <p className="text-base font-medium mb-3" style={{ color: '#A1A1AA' }}>
                        {step.description}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>
                        {step.detail}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* NON E' COMPLICATO */}
      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Non è complicato.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #22C55E, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Davvero.
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-12" style={{ color: '#A1A1AA' }}>
            Non devi essere tech. Non devi sapere come funziona un server. Non devi installare niente.
            Locario è pensato per chi gestisce un&apos;attività, non per chi fa l&apos;informatico.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {reassurancePoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-xl p-4"
                style={{
                  background: 'rgba(34, 197, 94, 0.06)',
                  border: '1px solid rgba(34, 197, 94, 0.15)',
                }}
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(34, 197, 94, 0.2)' }}
                >
                  <Check size={10} style={{ color: '#22C55E' }} />
                </div>
                <span className="text-sm" style={{ color: '#A1A1AA' }}>{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <TrialLink
              source="come-funziona"
              className="inline-flex items-center gap-2 px-8 py-5 text-base font-bold text-white rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                boxShadow: '0 8px 32px rgba(108, 99, 255, 0.4)',
              }}
            >
              Inizia gratis adesso <ArrowRight size={20} />
            </TrialLink>
          </div>
        </div>
      </section>

      <TrialCTA />
    </>
  )
}
