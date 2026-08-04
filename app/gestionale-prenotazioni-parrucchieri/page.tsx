// app/gestionale-prenotazioni-parrucchieri/page.tsx

import type { Metadata } from 'next'
import { generateMetadata as genMeta, buildFAQSchema } from '@/lib/seo'
import { TrialCTA } from '@/components/TrialCTA'
import { FAQ } from '@/components/FAQ'
import { JsonLd } from '@/components/JsonLd'
import { TrialLink } from '@/components/TrialLink'
import { ArrowRight, X, Check } from 'lucide-react'
import type { FAQItem } from '@/lib/constants'

export const metadata: Metadata = genMeta({
  title: 'Gestionale Prenotazioni Parrucchieri | Agenda Online Barber Shop | Locario',
  description:
    "L'agenda online per parrucchieri e barber shop. Gestisci operatori, orari e prenotazioni senza telefonate continue. Promemoria automatici, tracking canali. Prova gratis.",
  path: '/gestionale-prenotazioni-parrucchieri',
  keywords: [
    'agenda online parrucchiere',
    'software prenotazioni parrucchieri',
    'gestionale barber shop',
    'prenotazioni online salone',
    'agenda parrucchiere digitale',
  ],
})

const painPoints = [
  'Clienti che scrivono su WhatsApp a qualsiasi ora, anche di domenica sera',
  'Appuntamenti segnati sull\'agenda cartacea con errori, sovrapposizioni e correzioni',
  'Operatori con orari diversi difficili da coordinare in modo visibile',
  'Cancellazioni dell\'ultimo minuto senza preavviso che lasciano buchi nell\'agenda',
  'Clienti che dimenticano l\'orario e non si presentano senza avvisare',
  'Nessuna idea di quanti nuovi clienti arrivano da Instagram rispetto a Google Maps',
]

const solutionPoints = [
  'Link prenotazione da mettere in bio Instagram, Google Business e WhatsApp Business',
  'Agenda digitale con ogni operatore, servizi assegnati e disponibilità in tempo reale',
  'Gestione operatori con orari personalizzati e calendario separato per ognuno',
  'Promemoria automatici ai clienti: -70% di no-show in media',
  'Scheda cliente con preferenze salvate: stylist preferito, note e storico servizi',
  'Dashboard che mostra quante prenotazioni arrivano da Instagram vs Google vs sito',
]

const faqParrucchieri: FAQItem[] = [
  {
    question: 'Posso assegnare servizi specifici a ogni operatore?',
    answer:
      'Sì. In Locario ogni operatore ha il suo profilo con i servizi che esegue, le proprie disponibilità orarie e i propri giorni di lavoro. Quando un cliente prenota, vede solo gli operatori disponibili per quel servizio in quell\'orario.',
  },
  {
    question: 'Come faccio a far prenotare i clienti da Instagram?',
    answer:
      'Dal tuo pannello Locario generi un link prenotazione tracciato specifico per Instagram. Lo metti nella bio. Ogni prenotazione che arriva da quel link viene automaticamente registrata come "da Instagram" nella tua dashboard.',
  },
  {
    question: 'Cosa succede se un operatore è assente o in malattia?',
    answer:
      'Puoi bloccare la disponibilità di un operatore per qualsiasi periodo direttamente dall\'agenda. Il sistema non accetta nuove prenotazioni per quell\'operatore in quei giorni e puoi spostare gli appuntamenti già confermati.',
  },
  {
    question: 'Posso gestire anche i pagamenti con Locario?',
    answer:
      'Attualmente Locario gestisce prenotazioni, clienti e tracking canali. Il modulo pagamenti è nella roadmap. Puoi configurare una caparra o deposito come campo opzionale nella scheda di prenotazione.',
  },
  {
    question: 'Il sistema funziona anche per un barber shop con 3 operatori?',
    answer:
      'Assolutamente. Locario è progettato per gestire team da 1 a molti operatori. Ognuno ha la sua agenda, i clienti vedono la disponibilità per operatore e possono scegliere il loro preferito.',
  },
]

export default function GestionaleParrucchieriPage() {
  return (
    <>
      <JsonLd schema={buildFAQSchema(faqParrucchieri)} />
      {/* HERO */}
      <section
        className="section-padding pt-36 lg:pt-44"
        style={{ background: '#050816' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: 'rgba(108, 99, 255, 0.1)',
              border: '1px solid rgba(108, 99, 255, 0.3)',
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#6C63FF' }}>
              Per parrucchieri e barber shop
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            L&apos;agenda online per{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              parrucchieri e barber shop
            </span>
          </h1>

          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: '#A1A1AA' }}>
            Smetti di rispondere a WhatsApp mentre sei in servizio. Con Locario i clienti prenotano
            da soli, tu lavori senza interruzioni e sai da dove arriva ogni nuovo appuntamento.
          </p>

          <TrialLink
            source="hero"
            className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
              boxShadow: '0 8px 32px rgba(108, 99, 255, 0.4)',
            }}
          >
            Prova gratis 30 giorni <ArrowRight size={18} />
          </TrialLink>
        </div>
      </section>

      {/* PAIN POINTS vs SOLUZIONI */}
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
              <h2 className="text-xl font-bold text-white mb-6">La realtà di ogni giorno</h2>
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
                background: 'rgba(34, 197, 94, 0.05)',
                border: '1px solid rgba(34, 197, 94, 0.15)',
              }}
            >
              <h2 className="text-xl font-bold text-white mb-6">Come Locario cambia le cose</h2>
              <ul className="space-y-4">
                {solutionPoints.map((sol) => (
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

      {/* COME FUNZIONA: I CANALI */}
      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            I clienti prenotano da{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              dove sono già
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: '#A1A1AA' }}>
            Non devi spostare i tuoi clienti su un&apos;app nuova. Metti il link Locario dove loro
            già ti cercano.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                channel: 'Instagram',
                desc: 'Link in bio + sticker nelle stories. I follower prenotano senza uscire dall\'app.',
                color: '#E1306C',
              },
              {
                channel: 'Google Business',
                desc: 'Pulsante "Prenota" nel tuo profilo Google. Chi ti cerca prenota subito.',
                color: '#4285F4',
              },
              {
                channel: 'WhatsApp',
                desc: 'Link nel messaggio automatico del tuo numero. Niente più conversazioni per prenotare.',
                color: '#25D366',
              },
            ].map((c) => (
              <div
                key={c.channel}
                className="rounded-2xl p-6 text-center"
                style={{
                  background: `${c.color}08`,
                  border: `1px solid ${c.color}25`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center text-lg font-bold"
                  style={{ background: `${c.color}20`, color: c.color }}
                >
                  {c.channel.charAt(0)}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{c.channel}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqParrucchieri} title="Domande per parrucchieri" />

      <TrialCTA />
    </>
  )
}
