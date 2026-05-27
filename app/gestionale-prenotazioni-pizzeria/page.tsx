// app/gestionale-prenotazioni-pizzeria/page.tsx

import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import { TrialCTA } from '@/components/TrialCTA'
import Link from 'next/link'
import { ArrowRight, X, Check } from 'lucide-react'
import { LINKS } from '@/lib/constants'

export const metadata: Metadata = genMeta({
  title: 'Gestionale Prenotazioni Pizzeria | Locario',
  description:
    'Il gestionale delle prenotazioni per la tua pizzeria. Gestisci sala e asporto, prenotazioni gruppi e il caos del venerdì sera. Traccia i canali e riempi i giorni deboli.',
  path: '/gestionale-prenotazioni-pizzeria',
  keywords: [
    'gestionale prenotazioni pizzeria',
    'software prenotazioni pizzeria',
    'agenda pizzeria online',
    'prenotazioni online pizzeria',
    'gestionale sala pizzeria',
  ],
})

const painPointsPizzeria = [
  'Il venerdì e il sabato sera sono un caos: prenotazioni in arrivo da tutti i canali insieme',
  'I gruppi sono difficili da gestire: numero variabile, richieste speciali, conferme in ritardo',
  'WhatsApp viene usato sia per ordinare l\'asporto che per prenotare il tavolo: tutto confuso',
  'Lunedì e martedì la sala è semivuota ma non hai un sistema per promuoverla',
  'I clienti ricorrenti non vengono fidelizzati perché non hai uno storico strutturato',
  'Non sai quante prenotazioni vengono da Google Maps e quante da Instagram',
]

const solutionPointsPizzeria = [
  'Sala e asporto gestiti separatamente, ognuno con le sue disponibilità e regole',
  'Prenotazioni gruppi con campo numero persone, note e gestione tavoli multipli',
  'Link tracciato per ogni canale: WhatsApp prenotazioni, Google Business, Instagram',
  'Dashboard con dati sui giorni deboli: capisci quando e dove fare offerte mirate',
  'Storico clienti con preferenze, allergie e frequenza delle visite',
  'Promemoria automatici che riducono i no-show del weekend',
]

export default function GestionalePizzeriaPage() {
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
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EF4444' }}>
              Per pizzerie
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Il gestionale delle prenotazioni{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #EF4444, #F59E0B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              per la tua pizzeria
            </span>
          </h1>

          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: '#A1A1AA' }}>
            Sala, asporto, gruppi e venerdì sera. Ogni pizzeria ha un ritmo preciso e sfide specifiche.
            Locario le gestisce tutte in un sistema unico, con dati chiari su ogni canale.
          </p>

          <Link
            href={LINKS.trial}
            className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #EF4444, #F59E0B)',
              boxShadow: '0 8px 32px rgba(239, 68, 68, 0.3)',
            }}
          >
            Prova gratis 14 giorni <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* IL VENERDÌ SERA */}
      <section className="section-padding" style={{ background: '#0B1020' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Il venerdì sera è{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #EF4444, #F59E0B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              gestibile
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-12" style={{ color: '#A1A1AA' }}>
            Il momento più caotico della settimana diventa organizzato quando tutte le prenotazioni
            arrivano in un unico sistema, ordinate per orario e tavolo, con la fonte già registrata.
          </p>

          {/* Confronto prima/dopo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(239, 68, 68, 0.06)',
                border: '1px solid rgba(239, 68, 68, 0.15)',
              }}
            >
              <p className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: '#EF4444' }}>
                Senza Locario
              </p>
              {[
                'WhatsApp pieno di messaggi da smistare',
                'Prenotazioni segnate su un foglio con correzioni',
                'Una prenotazione doppia scoperta all\'ultimo',
                'Tre clienti che arrivano senza posto',
                'Non sai da dove arrivavano i tavoli pieni',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 mb-3">
                  <X size={12} className="flex-shrink-0 mt-1" style={{ color: '#EF4444' }} />
                  <span className="text-sm" style={{ color: '#A1A1AA' }}>{item}</span>
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(34, 197, 94, 0.06)',
                border: '1px solid rgba(34, 197, 94, 0.15)',
              }}
            >
              <p className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: '#22C55E' }}>
                Con Locario
              </p>
              {[
                'Prenotazioni in agenda, ordinate per tavolo e orario',
                'Disponibilità sempre aggiornata in tempo reale',
                'Zero doppie prenotazioni: il sistema blocca i conflitti',
                'I promemoria riducono i no-show del weekend',
                'La dashboard mostra da dove vengono i tavoli pieni',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 mb-3">
                  <Check size={12} className="flex-shrink-0 mt-1" style={{ color: '#22C55E' }} />
                  <span className="text-sm" style={{ color: '#A1A1AA' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS SPECIFICI */}
      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(239, 68, 68, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.15)',
              }}
            >
              <h2 className="text-xl font-bold text-white mb-6">Le sfide di ogni pizzeria</h2>
              <ul className="space-y-4">
                {painPointsPizzeria.map((pain) => (
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
                background: 'rgba(34, 197, 94, 0.05)',
                border: '1px solid rgba(34, 197, 94, 0.15)',
              }}
            >
              <h2 className="text-xl font-bold text-white mb-6">Come Locario le risolve</h2>
              <ul className="space-y-4">
                {solutionPointsPizzeria.map((sol) => (
                  <li key={sol} className="flex items-start gap-3">
                    <Check size={14} className="flex-shrink-0 mt-1" style={{ color: '#22C55E' }} />
                    <span className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RIEMPIRE I GIORNI DEBOLI */}
      <section className="section-padding" style={{ background: '#0B1020' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Lunedì e martedì non devono essere{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              giorni persi
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: '#A1A1AA' }}>
            Locario ti mostra quali sono i giorni con meno prenotazioni, da quali canali arrivano
            quelle poche e dove puoi fare una promozione mirata per riempire i tavoli vuoti.
          </p>
          <Link
            href={LINKS.trial}
            className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
              boxShadow: '0 4px 20px rgba(108, 99, 255, 0.3)',
            }}
          >
            Inizia la prova gratis <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <TrialCTA />
    </>
  )
}
