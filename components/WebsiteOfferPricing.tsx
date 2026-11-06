'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'

const packages = [
  {
    name: 'Sito Web',
    description: 'La presenza online essenziale per presentare bene la tua attività e farti contattare.',
    installmentsTotal: 189,
    installmentsMonthly: 15.75,
    singleTotal: 151.20,
    discount: 20,
    highlighted: false,
    features: [
      'Pagina Home personalizzata',
      'Pagina Menu o Servizi',
      'Pagina Contatti',
      'Design mobile e desktop',
      'Pubblicazione e assistenza tecnica per 12 mesi',
      'Ottimizzazione tecnica di base',
    ],
  },
  {
    name: 'Sito + Prenotazioni',
    description: 'Il sito completo con il sistema Locario per ricevere e organizzare le prenotazioni.',
    installmentsTotal: 537,
    installmentsMonthly: 44.75,
    singleTotal: 445.71,
    discount: 17,
    highlighted: true,
    features: [
      'Tutto il pacchetto Sito Web',
      'Pagina di prenotazione online',
      'Agenda e gestione prenotazioni Locario',
      'Link per Google, Instagram e WhatsApp',
      'Schede clienti e storico',
      'Tracking dei canali di acquisizione',
    ],
  },
] as const

function euro(value: number) {
  return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value)
}

export function WebsiteOfferPricing() {
  const [singlePayment, setSinglePayment] = useState(true)

  return (
    <section id="pacchetti" className="section-padding" style={{ background: '#0B1020' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#00D4FF' }}>
            Due formule, zero sorprese
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Scegli come partire</h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: '#A1A1AA' }}>
            Prezzi annuali chiari. Puoi distribuire il costo in 12 rate oppure risparmiare pagando in un&apos;unica soluzione.
          </p>
          <div className="mt-7 inline-flex rounded-lg border border-white/10 bg-white/5 p-1" role="group" aria-label="Modalità di pagamento">
            <button
              onClick={() => setSinglePayment(false)}
              className={`rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${!singlePayment ? 'bg-white text-gray-950' : 'text-white/65 hover:text-white'}`}
            >
              12 rate
            </button>
            <button
              onClick={() => setSinglePayment(true)}
              className={`rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${singlePayment ? 'bg-white text-gray-950' : 'text-white/65 hover:text-white'}`}
            >
              Unica soluzione
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {packages.map((item) => {
            const total = singlePayment ? item.singleTotal : item.installmentsTotal
            return (
              <article
                key={item.name}
                className="relative flex flex-col rounded-lg border p-6 sm:p-8"
                style={{
                  background: item.highlighted ? 'rgba(108,99,255,0.10)' : 'rgba(255,255,255,0.035)',
                  borderColor: item.highlighted ? 'rgba(108,99,255,0.65)' : 'rgba(255,255,255,0.10)',
                }}
              >
                {item.highlighted && (
                  <span className="absolute right-5 top-5 rounded-full bg-white px-3 py-1 text-xs font-bold text-gray-950">
                    Più completo
                  </span>
                )}
                <h3 className="pr-28 text-2xl font-bold">{item.name}</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>{item.description}</p>
                <div className="mt-7 border-y border-white/10 py-6">
                  <div className="flex items-end gap-2">
                    <strong className="text-4xl sm:text-5xl">{euro(total)}</strong>
                    <span className="pb-1 text-sm" style={{ color: '#A1A1AA' }}>/ anno</span>
                  </div>
                  {singlePayment ? (
                    <p className="mt-2 text-sm font-semibold" style={{ color: '#22C55E' }}>
                      Risparmi {item.discount}% pagando una sola volta
                    </p>
                  ) : (
                    <div className="mt-2 text-sm" style={{ color: '#A1A1AA' }}>
                      <p>12 rate da {euro(item.installmentsMonthly)}</p>
                      {item.highlighted && <p className="mt-1 text-xs">€15,75 sito web + €29,00 sistema prenotazioni</p>}
                    </div>
                  )}
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/85">
                      <Check size={17} className="mt-0.5 shrink-0 text-cyan-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contatti?servizio=${item.highlighted ? 'sito-prenotazioni' : 'sito-web'}&pagamento=${singlePayment ? 'unica-soluzione' : '12-rate'}`}
                  className="mt-8 flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5"
                  style={{
                    color: item.highlighted ? '#050816' : '#FFFFFF',
                    background: item.highlighted ? '#FFFFFF' : 'rgba(255,255,255,0.08)',
                    border: item.highlighted ? 'none' : '1px solid rgba(255,255,255,0.16)',
                  }}
                >
                  Richiedi il pacchetto <ArrowRight size={17} />
                </Link>
              </article>
            )
          })}
        </div>
        <p className="mt-5 text-center text-xs" style={{ color: '#71717A' }}>
          Prezzi al netto di IVA. Le 12 rate prevedono un impegno annuale. L&apos;offerta comprende 12 mesi di servizio.
        </p>
      </div>
    </section>
  )
}
