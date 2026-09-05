// app/gestionale-prenotazioni-bb/page.tsx

import type { Metadata } from 'next'
import { generateMetadata as genMeta, buildFAQSchema } from '@/lib/seo'
import { TrialCTA } from '@/components/TrialCTA'
import { BnbPricingCards } from '@/components/BnbPricingCards'
import { FAQ } from '@/components/FAQ'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'
import { TrialLink } from '@/components/TrialLink'
import { ArrowRight, X, Check } from 'lucide-react'
import type { FAQItem } from '@/lib/constants'

export const metadata: Metadata = genMeta({
  title: 'Gestionale Prenotazioni B&B e Case Vacanza',
  description:
    'Il gestionale per B&B e case vacanza. Calendario unico con sync Airbnb e Booking.com, invio guidato Alloggiati Web e ROSS1000, check-in online, tassa di soggiorno e caparra incassabili online.',
  path: '/gestionale-prenotazioni-bb',
  keywords: [
    'gestionale prenotazioni b&b',
    'software prenotazioni b&b',
    'gestionale case vacanza',
    'alloggiati web software',
    'ross1000 gestionale',
    'sincronizzazione airbnb booking.com',
  ],
})

const painPoints = [
  'Calendario diviso tra Airbnb, Booking.com e prenotazioni dirette, con il rischio di doppie prenotazioni',
  'Schedine Alloggiati Web da compilare a mano per ogni ospite, ogni settimana',
  'Comunicazione ROSS1000 all\'ente regionale gestita fuori da qualsiasi sistema',
  'Caparra, saldo e tassa di soggiorno incassati fuori piattaforma, tra bonifici e contanti',
  'Check-in ospiti gestito a voce, senza un\'anagrafica raccolta prima dell\'arrivo',
  'Nessun dato su quale canale — diretto, Airbnb, Booking.com — porta davvero valore',
]

const solutionPoints = [
  'Calendario unico con sincronizzazione iCal automatica verso Airbnb e Booking.com',
  'Invio guidato delle schedine ad Alloggiati Web, con verifica prima dell\'invio',
  'Rendicontazione ROSS1000 generata dai dati già raccolti, senza doppio inserimento',
  'Caparra, saldo e tassa di soggiorno riscuotibili online via Stripe Connect, fondi sempre tuoi',
  'Check-in online: l\'ospite compila l\'anagrafica e carica il documento prima di arrivare',
  'Tracking canale su ogni soggiorno: sai da dove arriva ognuno e quanto rende',
]

const faqBnb: FAQItem[] = [
  {
    question: 'L\'invio delle schedine ad Alloggiati Web è obbligatorio?',
    answer:
      'Sì, chi ospita in Italia è tenuto a comunicare i dati degli ospiti alla Questura tramite il portale Alloggiati Web. Locario genera le schedine dai dati già raccolti al check-in e le invia con un click, oppure le esporta in CSV se preferisci inserirle a mano sul portale.',
  },
  {
    question: 'Cos\'è ROSS1000 e perché serve?',
    answer:
      'ROSS1000 (in alcune regioni noto come Turismo5) è la rendicontazione statistica del movimento turistico richiesta dall\'ente regionale, distinta da Alloggiati Web. Locario genera l\'XML da inviare a partire dai dati di camere e soggiorni già presenti in piattaforma, con un\'anteprima leggibile prima dell\'invio.',
  },
  {
    question: 'Come funziona la sincronizzazione con Airbnb e Booking.com?',
    answer:
      'Locario si collega ai calendari di Airbnb, Booking.com e altri canali via feed iCal: importa le prenotazioni esterne ed esporta le tue dirette, così non rischi doppie prenotazioni sulla stessa camera. Se un feed si rompe, lo vedi subito in dashboard.',
  },
  {
    question: 'Posso far pagare online la tassa di soggiorno?',
    answer:
      'Sì, se colleghi Stripe Connect puoi riscuotere la tassa di soggiorno direttamente al check-in online, invece di doverla gestire in contanti all\'arrivo. È un\'opzione: resta comunque possibile lasciarla "da pagare in struttura".',
  },
  {
    question: 'È diverso da un gestionale per ristoranti?',
    answer:
      'Sì. Quando registri un B&B o una casa vacanza, Locario mostra una dashboard dedicata: camere al posto di tavoli, soggiorni al posto di coperti, e tutti gli strumenti specifici dell\'ospitalità — Alloggiati Web, ROSS1000, iCal, check-in online — senza nessun concetto da ristorante di mezzo.',
  },
]

export default function GestionaleBnbPage() {
  return (
    <>
      <JsonLd schema={buildFAQSchema(faqBnb)} />
      {/* HERO */}
      <section
        className="section-padding pt-36 lg:pt-44"
        style={{ background: '#050816' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: 'rgba(244, 63, 94, 0.1)',
              border: '1px solid rgba(244, 63, 94, 0.3)',
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#F43F5E' }}>
              Per B&B e case vacanza
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Il gestionale delle prenotazioni{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #F43F5E, #6C63FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              per il tuo B&B
            </span>
          </h1>

          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: '#A1A1AA' }}>
            Il tuo B&B riceve prenotazioni da Airbnb, Booking.com e dal sito, ognuna con le sue regole.
            A questo si aggiungono schedine Alloggiati Web, comunicazione ROSS1000 e tassa di soggiorno
            da gestire a mano. Locario porta tutto in un unico sistema, pensato per l&apos;ospitalità italiana.
          </p>

          <TrialLink
            source="hero"
            className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #F43F5E, #6C63FF)',
              boxShadow: '0 8px 32px rgba(244, 63, 94, 0.3)',
            }}
          >
            Prova gratis 30 giorni <ArrowRight size={18} />
          </TrialLink>
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

      {/* SEZIONE DATI CHE GLI HOST VEDONO */}
      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Gli host che usano Locario{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #F43F5E, #6C63FF)',
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
              'Quali camere sono libere su tutti i canali, senza controllare due calendari',
              'Quando scade l\'invio delle schedine Alloggiati Web per gli ospiti in arrivo',
              'Quanto rende ogni camera a notte, con tariffe stagionali automatiche',
              'Quale canale — diretto, Airbnb, Booking.com — porta più soggiorni e più margine',
              'Chi ha già completato il check-in online e chi va ancora sollecitato',
              'Quanta tassa di soggiorno hanno incassato nel mese, online e in struttura',
            ].map((insight) => (
              <div
                key={insight}
                className="flex items-start gap-3 rounded-xl p-4"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Check size={14} className="flex-shrink-0 mt-1" style={{ color: '#F43F5E' }} />
                <span className="text-sm" style={{ color: '#A1A1AA' }}>{insight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREZZI B&B */}
      <BnbPricingCards />

      {/* FAQ */}
      <FAQ items={faqBnb} title="Domande su B&B e case vacanza" />

      {/* LINK INTERNI */}
      <section
        className="py-12"
        style={{ background: '#0B1020', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm mb-4" style={{ color: '#A1A1AA' }}>
            Approfondisci:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Link href="/tracciamento-prenotazioni" className="text-sm" style={{ color: '#F43F5E' }}>
              Tracciamento canali <ArrowRight size={12} className="inline" />
            </Link>
            <Link href="/gestione-clienti" className="text-sm" style={{ color: '#F43F5E' }}>
              Gestione ospiti <ArrowRight size={12} className="inline" />
            </Link>
            <Link href="/prenotazioni-online" className="text-sm" style={{ color: '#F43F5E' }}>
              Prenotazioni online <ArrowRight size={12} className="inline" />
            </Link>
          </div>
          <p className="text-sm mb-4" style={{ color: '#A1A1AA' }}>
            Locario funziona anche per:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/gestionale-prenotazioni-agriturismo" className="text-sm" style={{ color: '#6C63FF' }}>
              Agriturismi <ArrowRight size={12} className="inline" />
            </Link>
            <Link href="/gestionale-prenotazioni-ristorante" className="text-sm" style={{ color: '#6C63FF' }}>
              Ristoranti <ArrowRight size={12} className="inline" />
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

      <TrialCTA source="bnb-hub" />
    </>
  )
}
