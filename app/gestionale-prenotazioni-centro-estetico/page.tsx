// app/gestionale-prenotazioni-centro-estetico/page.tsx

import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import { TrialCTA } from '@/components/TrialCTA'
import Link from 'next/link'
import { ArrowRight, X, Check } from 'lucide-react'
import { LINKS } from '@/lib/constants'

export const metadata: Metadata = genMeta({
  title: 'Gestionale Prenotazioni Centro Estetico e Spa | Locario',
  description:
    'Il gestionale per centri estetici e spa: gestisci trattamenti, cabine, operatrici e clienti abituali in un sistema ordinato. Traccia i canali e misura le promozioni.',
  path: '/gestionale-prenotazioni-centro-estetico',
  keywords: [
    'gestionale prenotazioni centro estetico',
    'software prenotazioni spa',
    'agenda online centro estetico',
    'gestionale trattamenti estetici',
    'prenotazioni online centro benessere',
  ],
})

const painPoints = [
  'Trattamenti con durate molto diverse: da 20 minuti a 2 ore, difficili da incastrare',
  'Cabine e operatrici specializzate da coordinare senza sovrapposizioni',
  'Clienti abituali con preferenze, allergie e trattamenti personalizzati da ricordare',
  'Promozioni stagionali difficili da misurare: non sai se hanno funzionato davvero',
  'Richieste da Instagram, sito web e telefono tutte mischiate senza un flusso chiaro',
  'Nessun sistema per capire quali servizi portano più clienti nuovi',
]

const solutionPoints = [
  'Ogni trattamento con la sua durata precisa: il sistema incastra gli appuntamenti automaticamente',
  'Cabine e operatrici con disponibilità separate: zero sovrapposizioni',
  'Scheda cliente con allergie, preferenze, trattamenti passati e note personali',
  'Tracking su ogni promozione: sai quante prenotazioni ha generato ogni campagna',
  'Link tracciato per Instagram, Google e sito: ogni fonte ha il suo identificatore',
  'Dashboard con i servizi più prenotati e i canali che portano più clienti nuovi',
]

export default function GestionaleCentroEsteticoPage() {
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
              background: 'rgba(0, 212, 255, 0.1)',
              border: '1px solid rgba(0, 212, 255, 0.3)',
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#00D4FF' }}>
              Per centri estetici e spa
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Il gestionale per il tuo{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00D4FF, #6C63FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              centro estetico e spa
            </span>
          </h1>

          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: '#A1A1AA' }}>
            Trattamenti di durata diversa, cabine specializzate, clienti abituali da coccolare. Ogni
            centro estetico è un puzzle preciso. Locario lo gestisce in modo ordinato e ti mostra
            da dove arriva ogni prenotazione.
          </p>

          <Link
            href={LINKS.trial}
            className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #00D4FF, #6C63FF)',
              boxShadow: '0 8px 32px rgba(0, 212, 255, 0.3)',
            }}
          >
            Prova gratis 14 giorni <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* PAIN vs SOLUTION */}
      <section className="section-padding" style={{ background: '#0B1020' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(239, 68, 68, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.15)',
              }}
            >
              <h2 className="text-xl font-bold text-white mb-6">Le sfide di un centro estetico</h2>
              <ul className="space-y-4">
                {painPoints.map((pain) => (
                  <li key={pain} className="flex items-start gap-3">
                    <X size={14} className="flex-shrink-0 mt-1" style={{ color: '#EF4444' }} />
                    <span className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>{pain}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(0, 212, 255, 0.05)',
                border: '1px solid rgba(0, 212, 255, 0.15)',
              }}
            >
              <h2 className="text-xl font-bold text-white mb-6">Come Locario le risolve</h2>
              <ul className="space-y-4">
                {solutionPoints.map((sol) => (
                  <li key={sol} className="flex items-start gap-3">
                    <Check size={14} className="flex-shrink-0 mt-1" style={{ color: '#00D4FF' }} />
                    <span className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE PROMOZIONI MISURABILI */}
      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Le promozioni finalmente{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00D4FF, #22C55E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              hanno un dato di ritorno
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-12" style={{ color: '#A1A1AA' }}>
            Hai fatto una promozione estiva su Instagram. Ha funzionato? Quante prenotazioni ha
            generato? Con Locario lo sai esattamente: ogni link tracciato per la promozione ti
            dice quante prenotazioni sono arrivate da quella campagna specifica.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                title: 'Prima della promozione',
                desc: 'Crei un link tracciato per la campagna su Instagram e uno per la newsletter.',
                color: '#6C63FF',
              },
              {
                title: 'Durante la promozione',
                desc: 'Ogni prenotazione che arriva da quei link viene registrata come conversione della campagna.',
                color: '#00D4FF',
              },
              {
                title: 'Dopo la promozione',
                desc: 'Dashboard: quante prenotazioni, da quale canale, a quale orario. ROI misurabile.',
                color: '#22C55E',
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-2xl p-6 text-center"
                style={{
                  background: `${step.color}08`,
                  border: `1px solid ${step.color}25`,
                }}
              >
                <div
                  className="w-2 h-10 rounded-full mx-auto mb-4"
                  style={{ background: step.color }}
                />
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTI ABITUALI */}
      <section className="section-padding" style={{ background: '#0B1020' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            I clienti abituali meritano{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #F59E0B, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              un servizio personalizzato
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: '#A1A1AA' }}>
            La scheda cliente di Locario conserva tutto: i trattamenti fatti, le allergie annotate,
            le preferenze di operatrice, le note personali. Al prossimo appuntamento sei già
            pronto, senza dover chiedere di nuovo tutto dall&apos;inizio.
          </p>

          {/* Card cliente esempio */}
          <div
            className="max-w-sm mx-auto rounded-2xl p-6 text-left"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className="flex items-center gap-3 mb-5 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                style={{ background: 'rgba(0, 212, 255, 0.15)', color: '#00D4FF' }}
              >
                A
              </div>
              <div>
                <p className="font-bold text-white">Anna Conti</p>
                <p className="text-xs" style={{ color: '#A1A1AA' }}>Cliente da 2 anni · 34 prenotazioni</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Trattamento preferito', value: 'Manicure + Pedicure' },
                { label: 'Operatrice', value: 'Sara (sempre)' },
                { label: 'Allergie', value: 'Nickel, lattice' },
                { label: 'Note', value: 'Preferisce orari mattutini' },
                { label: 'Canale acquisizione', value: 'Instagram' },
              ].map((info) => (
                <div key={info.label} className="flex items-start justify-between gap-4">
                  <span className="text-xs" style={{ color: '#A1A1AA' }}>{info.label}</span>
                  <span className="text-xs font-medium text-white text-right">{info.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrialCTA />
    </>
  )
}
