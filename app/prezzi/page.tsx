// app/prezzi/page.tsx

import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import { PricingCards } from '@/components/PricingCards'
import { FAQ } from '@/components/FAQ'
import { TrialCTA } from '@/components/TrialCTA'
import { Check } from 'lucide-react'
import type { FAQItem } from '@/lib/constants'

export const metadata: Metadata = genMeta({
  title: 'Prezzi Locario | Piani e Tariffe Gestionale Prenotazioni',
  description:
    'Scopri i piani di Locario. 14 giorni di prova gratuita su tutti i piani, nessuna carta richiesta. Scegli il piano giusto per la tua attività.',
  path: '/prezzi',
  keywords: [
    'prezzi gestionale prenotazioni',
    'costo software prenotazioni',
    'piano locario',
    'tariffe gestionale attività locale',
    'abbonamento gestionale prenotazioni',
  ],
})

const includedInAll: string[] = [
  '14 giorni di prova gratuita su tutti i piani',
  'Nessuna carta di credito per iniziare',
  'Agenda online e link prenotazione personalizzato',
  'Tracking canali di acquisizione',
  'Promemoria automatici per i clienti',
  'Assistenza via email inclusa',
  'Aggiornamenti automatici del software',
  'Dati sicuri e protetti (HTTPS, cifratura)',
  'Accesso da qualsiasi dispositivo (web, mobile, tablet)',
  'Backup automatico dei dati',
]

const faqPrezzi: FAQItem[] = [
  {
    question: 'Posso cambiare piano in qualsiasi momento?',
    answer:
      'Sì. Puoi passare a un piano superiore o inferiore in qualsiasi momento dal tuo pannello. Il cambio è immediato e il credito residuo del piano precedente viene scalato proporzionalmente.',
  },
  {
    question: 'Il prezzo aumenta nel tempo?',
    answer:
      'No. Il piano che scegli ha un prezzo fisso. Non ci sono aumenti automatici o sorprese in bolletta. Se in futuro i prezzi cambiano, i clienti esistenti mantengono le condizioni attuali.',
  },
  {
    question: 'Cosa succede dopo i 14 giorni di prova gratuita?',
    answer:
      'Al termine della prova ti viene chiesto di scegliere un piano per continuare. Se non scegli nessun piano, l\'account viene sospeso automaticamente e non viene addebitato nulla. Nessuna sorpresa.',
  },
  {
    question: 'Posso annullare l\'abbonamento senza penali?',
    answer:
      'Assolutamente. Puoi cancellare in qualsiasi momento dal tuo pannello, senza penali e senza bisogno di contattare nessuno. Il servizio rimane attivo fino alla fine del periodo già pagato.',
  },
  {
    question: 'I prezzi sono IVA inclusa?',
    answer:
      'I prezzi indicati sono al netto di IVA. L\'IVA viene applicata in base alla normativa vigente per la tua categoria (imprenditore o privato). Puoi inserire la partita IVA nel tuo profilo per la fatturazione.',
  },
  {
    question: 'Esiste uno sconto per pagamento annuale?',
    answer:
      'Sì. Scegliendo la fatturazione annuale risparmi fino al 17% rispetto al mensile. Starter passa da €29/mese a €290/anno (equivale a €24,17/mese). Professional da €69/mese a €690/anno (€57,50/mese). Business da €149/mese a €1.490/anno.',
  },
  {
    question: 'Cos\'è il setup iniziale da €49?',
    answer:
      'Il setup iniziale è un costo una tantum di €49 richiesto sui piani Starter e Professional. Include la configurazione guidata della piattaforma, la creazione della pagina prenotazioni, l\'inserimento dei primi servizi o trattamenti, la configurazione dei link principali e il supporto nei primi passi. Non è richiesto sul piano Business.',
  },
]

export default function PrezziPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="section-padding pt-36 lg:pt-44"
        style={{ background: '#050816' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Scegli il piano giusto per{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              la tua attività
            </span>
          </h1>
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: '#A1A1AA' }}>
            Inizia con 14 giorni di prova gratuita. Nessuna carta. Nessun vincolo. Scegli il piano
            solo se ti convince davvero.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <PricingCards />

      {/* INCLUSO IN TUTTI I PIANI */}
      <section className="section-padding" style={{ background: '#0B1020' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 leading-tight">
            Cosa è incluso in{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              tutti i piani
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {includedInAll.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-left rounded-xl p-4"
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
                <span className="text-sm" style={{ color: '#A1A1AA' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREZZI */}
      <FAQ items={faqPrezzi} title="Domande sui piani e prezzi" />

      <TrialCTA />
    </>
  )
}
