// app/gestionale-prenotazioni-ristorante/page.tsx

import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import { TrialCTA } from '@/components/TrialCTA'
import { FAQ } from '@/components/FAQ'
import Link from 'next/link'
import { ArrowRight, X, Check } from 'lucide-react'
import { LINKS } from '@/lib/constants'
import type { FAQItem } from '@/lib/constants'

export const metadata: Metadata = genMeta({
  title: 'Gestionale Prenotazioni Ristorante | Locario',
  description:
    'Il gestionale prenotazioni per il tuo ristorante. Gestisci tavoli, turni e prenotazioni da Google, WhatsApp, Instagram in un unico sistema. Traccia i canali e riduci i no-show.',
  path: '/gestionale-prenotazioni-ristorante',
  keywords: [
    'gestionale prenotazioni ristorante',
    'software prenotazioni ristorante',
    'agenda ristorante online',
    'prenotazioni tavoli online',
    'gestionale tavoli ristorante',
  ],
})

const painPoints = [
  'Doppie prenotazioni nei weekend per sovrapposizioni tra canali',
  'WhatsApp che squilla a qualsiasi ora anche quando sei in servizio',
  'Messaggi dispersi tra chat, telefonate e note scritte a mano',
  'Nessuna idea di quale canale porta più tavoli ogni settimana',
  'Giorni deboli (lunedì, martedì) che non riesci a riempire',
  'Nessuno storico clienti utile per fare marketing mirato',
]

const solutionPoints = [
  'Prenotazioni da Google, sito, social e WhatsApp in un flusso unico',
  'Gestione tavoli e turni con disponibilità in tempo reale',
  'Tracking canale su ogni prenotazione: sai da dove arriva ognuna',
  'Dashboard per capire i giorni forti, deboli e i canali che convertono',
  'Storico clienti con preferenze, richieste speciali e note operative',
  'Promemoria automatici ai clienti per ridurre i no-show del weekend',
]

const faqRistorante: FAQItem[] = [
  {
    question: 'Locario gestisce anche le prenotazioni per gruppi numerosi?',
    answer:
      'Sì. Puoi configurare Locario per accettare prenotazioni con numero di persone specifico, gestire richieste speciali per gruppi e assegnare più tavoli allo stesso gruppo. Il sistema mostra la disponibilità in base alla capacità che hai impostato.',
  },
  {
    question: 'Posso gestire più turni di servizio (pranzo e cena)?',
    answer:
      'Assolutamente. Locario supporta la gestione di turni multipli nello stesso giorno. Configuri la durata di ogni turno, il numero massimo di tavoli per turno, e il sistema gestisce automaticamente le disponibilità per pranzo, cena o altri momenti.',
  },
  {
    question: 'Come funziona il tracciamento da Google Business Profile?',
    answer:
      'Inserisci nel tuo profilo Google Business il link prenotazione tracciato che Locario ti genera. Ogni cliente che prenota cliccando da Google viene automaticamente registrato come "da Google Business Profile" nella tua dashboard.',
  },
  {
    question: 'Posso prendere prenotazioni sia per i tavoli che per l\'asporto?',
    answer:
      'Sì, puoi configurare tipologie di prenotazione diverse. Tavoli in sala, asporto o eventi privati: ogni tipologia ha le sue regole di disponibilità e orari separati.',
  },
  {
    question: 'Come riduco i no-show nei weekend?',
    answer:
      'Attivi i promemoria automatici: il sistema manda un messaggio al cliente 24 ore e/o 2 ore prima della prenotazione. Questo riduce significativamente le assenze, soprattutto nel weekend quando le persone hanno più impegni.',
  },
]

export default function GestionaleRistorantePage() {
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
              background: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#F59E0B' }}>
              Per ristoranti e trattorie
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Il gestionale prenotazioni{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #F59E0B, #6C63FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              per il tuo ristorante
            </span>
          </h1>

          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: '#A1A1AA' }}>
            Il tuo ristorante riceve prenotazioni da Google, WhatsApp, telefono, Instagram e il sito.
            Ognuno con regole diverse. Ognuno difficile da tenere sotto controllo. Locario porta tutto
            in un unico sistema e ti dice da dove arriva ogni prenotazione.
          </p>

          <Link
            href={LINKS.trial}
            className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #F59E0B, #6C63FF)',
              boxShadow: '0 8px 32px rgba(245, 158, 11, 0.3)',
            }}
          >
            Prova gratis 14 giorni <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* PAIN POINTS vs SOLUZIONE */}
      <section className="section-padding" style={{ background: '#0B1020' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Pain points */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(239, 68, 68, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.15)',
              }}
            >
              <h2 className="text-xl font-bold text-white mb-6">
                Il problema che conosci bene
              </h2>
              <ul className="space-y-4">
                {painPoints.map((pain) => (
                  <li key={pain} className="flex items-start gap-3">
                    <X size={14} className="flex-shrink-0 mt-1" style={{ color: '#EF4444' }} />
                    <span className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>
                      {pain}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soluzioni */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(34, 197, 94, 0.05)',
                border: '1px solid rgba(34, 197, 94, 0.15)',
              }}
            >
              <h2 className="text-xl font-bold text-white mb-6">
                Come Locario lo risolve
              </h2>
              <ul className="space-y-4">
                {solutionPoints.map((sol) => (
                  <li key={sol} className="flex items-start gap-3">
                    <Check size={14} className="flex-shrink-0 mt-1" style={{ color: '#22C55E' }} />
                    <span className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>
                      {sol}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE DATI CHE I RISTORANTI VEDONO */}
      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            I ristoranti che usano Locario{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #F59E0B, #6C63FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              sanno esattamente
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 text-left">
            {[
              'Quale giorno della settimana porta più coperti da Google',
              'Se Instagram o il sito web converte di più in prenotazioni effettive',
              'Quanti clienti tornano dopo la prima visita e con quale frequenza',
              'In quali ore della giornata arriva la maggior parte delle prenotazioni online',
              'Quale campagna pubblicitaria ha portato più tavoli quel mese',
              'Quante prenotazioni si perdono ogni settimana e per quale motivo',
            ].map((insight) => (
              <div
                key={insight}
                className="flex items-start gap-3 rounded-xl p-4"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Check size={14} className="flex-shrink-0 mt-1" style={{ color: '#F59E0B' }} />
                <span className="text-sm" style={{ color: '#A1A1AA' }}>{insight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqRistorante} title="Domande sui ristoranti" />

      {/* LINK INTERNI */}
      <section
        className="py-12"
        style={{ background: '#0B1020', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm mb-4" style={{ color: '#A1A1AA' }}>
            Locario funziona anche per:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/gestionale-prenotazioni-pizzeria" className="text-sm" style={{ color: '#6C63FF' }}>
              Pizzerie <ArrowRight size={12} className="inline" />
            </Link>
            <Link href="/gestionale-prenotazioni-parrucchieri" className="text-sm" style={{ color: '#6C63FF' }}>
              Parrucchieri <ArrowRight size={12} className="inline" />
            </Link>
            <Link href="/gestionale-prenotazioni-centro-estetico" className="text-sm" style={{ color: '#6C63FF' }}>
              Centri Estetici <ArrowRight size={12} className="inline" />
            </Link>
          </div>
        </div>
      </section>

      <TrialCTA />
    </>
  )
}
