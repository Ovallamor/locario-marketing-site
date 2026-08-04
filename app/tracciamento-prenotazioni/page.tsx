// app/tracciamento-prenotazioni/page.tsx
// PAGINA FONDAMENTALE - il principale differenziatore di Locario

import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import { TrackingSources } from '@/components/TrackingSources'
import { TrialCTA } from '@/components/TrialCTA'
import { FAQ } from '@/components/FAQ'
import { TrialLink } from '@/components/TrialLink'
import { ArrowRight, Check } from 'lucide-react'
import type { FAQItem } from '@/lib/constants'

export const metadata: Metadata = genMeta({
  title: 'Tracciamento Prenotazioni | Scopri da Dove Arrivano i Clienti | Locario',
  description:
    'Con Locario sai esattamente da dove arriva ogni prenotazione: Google, Instagram, WhatsApp, QR code o campagne. Smetti di indovinare, inizia a investire sui canali che funzionano.',
  path: '/tracciamento-prenotazioni',
  keywords: [
    'tracciamento prenotazioni online',
    'tracking canali acquisizione clienti',
    'analytics prenotazioni attività locale',
    'da dove arrivano clienti attività',
    'misurare ROI canali prenotazione',
  ],
})

const faqTracking: FAQItem[] = [
  {
    question: 'Devo fare qualcosa di tecnico per impostare il tracking?',
    answer:
      'No. Il tracking è integrato nativamente in Locario. Dal tuo pannello generi i link tracciati per ogni canale e li distribuisci. Il sistema registra automaticamente la fonte di ogni prenotazione.',
  },
  {
    question: 'Posso tracciare anche una campagna Google Ads specifica?',
    answer:
      'Sì. Per ogni campagna pubblicitaria puoi generare un link tracciato dedicato. Così sai quante prenotazioni ha portato quella campagna specifica, non solo "Google Ads" in generale.',
  },
  {
    question: 'I dati di tracking sono in tempo reale?',
    answer:
      'Sì. La dashboard mostra i dati aggiornati in tempo reale. Ogni nuova prenotazione compare immediatamente con il suo canale di origine.',
  },
  {
    question: 'Posso esportare i dati di tracking?',
    answer:
      'Sì, puoi esportare i report della dashboard in formato CSV per analisi esterne o da condividere con un consulente marketing o con il tuo commercialista.',
  },
  {
    question: 'Cosa succede se un cliente prenota direttamente senza passare da un link tracciato?',
    answer:
      'Le prenotazioni inserite manualmente dallo staff vengono registrate come "Telefono" o "Diretto". Puoi anche assegnare manualmente un canale a ogni prenotazione inserita a mano.',
  },
]

export default function TracciamentoPrenotazioniPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="section-padding pt-36 lg:pt-44"
        style={{ background: '#050816' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#22C55E' }}>
              Il differenziatore di Locario
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Scopri da dove arrivano{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #22C55E, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              davvero le tue prenotazioni
            </span>
          </h1>

          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: '#A1A1AA' }}>
            Ricevi prenotazioni ogni giorno. Ma sai da dove arrivano? Il 40% dei titolari di
            attività locali non riesce a rispondere a questa domanda. Con Locario, puoi.
          </p>

          <TrialLink
            source="hero"
            className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #22C55E, #00D4FF)',
              boxShadow: '0 8px 32px rgba(34, 197, 94, 0.3)',
            }}
          >
            Inizia a tracciare gratis <ArrowRight size={18} />
          </TrialLink>
        </div>
      </section>

      {/* IL PROBLEMA CHE NESSUNO RISOLVE */}
      <section className="section-padding" style={{ background: '#0B1020' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Il problema che{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                nessun gestionale risolve
              </span>
            </h2>
          </div>

          <div
            className="rounded-2xl p-8 lg:p-10"
            style={{
              background: 'rgba(108, 99, 255, 0.06)',
              border: '1px solid rgba(108, 99, 255, 0.2)',
            }}
          >
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#A1A1AA' }}>
              Hai investito su Google Business Profile. Hai messo il link su Instagram. Hai fatto
              una campagna su Meta Ads. Ma alla fine del mese, sai quale di questi canali ha portato
              prenotazioni?
            </p>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#A1A1AA' }}>
              Probabilmente no. La maggior parte dei gestionali ti dice{' '}
              <em>quante</em> prenotazioni hai ricevuto. Ma non{' '}
              <strong style={{ color: 'white' }}>da dove</strong>.{' '}
              Locario è stato costruito per risolvere proprio questo.
            </p>

            {/* Stats impatto */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { value: '40%', label: 'dei titolari non sa da dove arrivano le prenotazioni' },
                { value: '11', label: 'canali di acquisizione tracciati da Locario' },
                { value: '100%', label: 'delle prenotazioni con fonte registrata automaticamente' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center rounded-xl p-5"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <p
                    className="text-4xl font-black mb-2"
                    style={{
                      background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs leading-snug" style={{ color: '#A1A1AA' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Come funziona{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              il tracking canali
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
            {[
              {
                step: '1',
                title: 'Ogni canale ha il suo identificatore',
                desc: 'Dal pannello Locario generi un link tracciato per ogni canale. Instagram ha il suo, Google Business il suo, il sito il suo, Meta Ads il suo. Ognuno è unico.',
                color: '#6C63FF',
              },
              {
                step: '2',
                title: 'Ogni prenotazione porta la sua fonte',
                desc: 'Quando un cliente prenota tramite un link tracciato, il sistema registra automaticamente la fonte. Nessuna azione manuale richiesta.',
                color: '#00D4FF',
              },
              {
                step: '3',
                title: 'La dashboard mostra i dati in tempo reale',
                desc: 'Vedi subito quali canali portano più prenotazioni, a quale ora e in quale giorno. Dati che aiutano a decidere dove investire.',
                color: '#22C55E',
              },
            ].map((step) => (
              <div
                key={step.step}
                className="rounded-2xl p-6"
                style={{
                  background: `${step.color}08`,
                  border: `1px solid ${step.color}25`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-black mb-4"
                  style={{ background: `${step.color}15`, color: step.color }}
                >
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACKING SOURCES COMPONENT */}
      <TrackingSources />

      {/* COSA PUOI FARE CON I DATI */}
      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Cosa puoi fare{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              con questi dati
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 text-left">
            {[
              {
                title: 'Investire dove funziona',
                desc: 'Se Google porta il 60% delle prenotazioni e Meta Ads solo il 5%, sai dove concentrare il budget.',
              },
              {
                title: 'Ottimizzare i profili',
                desc: 'Se Instagram porta poche prenotazioni, forse la bio non è ottimizzata. I dati ti dicono dove intervenire.',
              },
              {
                title: 'Riempire i giorni deboli',
                desc: 'Sai che il lunedì è il giorno più debole e che Instagram converte bene. Fai una promozione lunedì su Instagram.',
              },
              {
                title: 'Smettere di sprecare',
                desc: 'Se un canale non porta prenotazioni in 3 mesi, hai un dato chiaro per smettere di investirci tempo e soldi.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl p-5"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(34, 197, 94, 0.2)' }}
                >
                  <Check size={10} style={{ color: '#22C55E' }} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqTracking} title="Domande sul tracking canali" />

      <TrialCTA />
    </>
  )
}
