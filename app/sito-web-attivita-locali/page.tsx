import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight, BarChart3, BellRing, CalendarDays, Check, Eye, Mail, MenuSquare,
  Receipt, Rocket, ShieldCheck, Smartphone, Users, Wrench, X,
} from 'lucide-react'
import { WebsiteOfferPricing } from '@/components/WebsiteOfferPricing'
import { FAQ } from '@/components/FAQ'
import { JsonLd } from '@/components/JsonLd'
import { generateMetadata as genMeta, buildFAQSchema } from '@/lib/seo'
import { INDUSTRY_NAV, type FAQItem } from '@/lib/constants'
import { LOWEST_SINGLE_CENTS, OFFER, euro, schemaPrice, shortEuro } from '@/lib/website-offer'

export const metadata: Metadata = genMeta({
  title: `Creazione Sito Web per Attività Locali da ${shortEuro(LOWEST_SINGLE_CENTS)}`,
  description: `Un sito che porta clienti: lo creiamo noi, con menu, contatti e prenotazioni online. Assistenza di 12 mesi inclusa, nessun rinnovo automatico. Da ${shortEuro(LOWEST_SINGLE_CENTS)} l’anno.`,
  path: '/sito-web-attivita-locali',
  keywords: [
    'creazione sito web attività locale',
    'sito web ristorante economico',
    'sito web con prenotazioni online',
    'sito web menu ristorante',
    'sito web professionale piccola attività',
    'sito web e gestionale prenotazioni',
  ],
})

const trust = [
  '12 mesi di assistenza inclusi',
  'Prezzo chiaro, senza costi nascosti',
  'Nessun rinnovo automatico',
  'Pagamento sicuro con Stripe',
]

const pains = [
  'Un sito vecchio, lento o impossibile da leggere da smartphone.',
  'Un menu in PDF che nessuno apre, o che non è mai aggiornato.',
  'Prenotazioni solo per telefono, proprio quando sei nel pieno del servizio.',
  'Nessuna idea di da dove arrivano davvero i tuoi clienti.',
]

const benefits = [
  { icon: Wrench, title: 'Zero pensieri tecnici', text: 'Pubblicazione, sicurezza e aggiornamenti tecnici sono inclusi per 12 mesi. Tu pensi alla tua attività.' },
  { icon: Smartphone, title: 'Pensato per lo smartphone', text: 'Ogni pagina si legge e si usa bene dal telefono, dove i clienti ti cercano e ti contattano.' },
  { icon: Receipt, title: 'Prezzo chiaro, senza sorprese', text: 'Sai prima quanto spendi. Dominio nuovo, foto o pagine in più vengono quotati prima, mai dopo.' },
  { icon: BellRing, title: 'Nessun rinnovo a sorpresa', text: 'Dopo 12 mesi il servizio non si rinnova da solo. Ti avvisiamo 20, 7, 3 e 1 giorno prima della scadenza.' },
  { icon: Rocket, title: 'Si parte subito', text: 'Dopo il pagamento, entro 48 ore lavorative iniziamo a costruire il tuo sito.' },
  { icon: Eye, title: 'Lo vedi prima che vada online', text: 'Ti presentiamo il sito in una call e hai una revisione inclusa prima della pubblicazione.' },
]

const steps = [
  { title: 'Scegli il pacchetto', text: 'Sito, sito con prenotazioni o sito con gestionale completo. Paghi a rate o in un’unica soluzione, con sconto.' },
  { title: 'Raccontaci la tua attività', text: 'Poche domande, pochi minuti. Non serve avere tutto pronto: nemmeno il logo.' },
  { title: 'Noi costruiamo il sito', text: 'Entro 48 ore lavorative iniziamo. Analizziamo identità, stile e contenuti della tua attività.' },
  { title: 'Lo scopri e lo pubblichiamo', text: 'Ti mostriamo il risultato in una call, raccogliamo la tua revisione e mettiamo il sito online.' },
]

const bookingGains = [
  'Pagina di prenotazione online: i clienti prenotano 24 ore su 24',
  'Agenda e gestione prenotazioni in un unico posto',
  'Menu digitale con QR code',
  'Promemoria email automatici ai clienti',
  'Schede clienti e storico',
  'Link per Google, Instagram e WhatsApp, per capire da dove arrivano le prenotazioni',
]

const professionalGains = [
  'Prenotazioni online illimitate e 3 utenti inclusi',
  'Menu digitale collegato al sito e aggiornato in automatico',
  'CRM clienti: schede avanzate e storico di clienti e appuntamenti',
  'Agenda avanzata con operatori e servizi per operatore',
  'Email marketing e automazioni per far tornare i clienti',
  'Lista d’attesa e deposito anti no-show',
  'Richiesta di recensione automatica dopo la visita',
  'Statistiche e tracking completo dei canali',
]

const faqWebsite: FAQItem[] = [
  {
    question: 'Cosa comprende il pacchetto Sito Web?',
    answer: 'Comprende la realizzazione delle pagine Home, Menu o Servizi e Contatti, l’adattamento per smartphone e computer, il caricamento iniziale dei contenuti forniti dal cliente, una revisione prima della pubblicazione e 12 mesi di assistenza tecnica.',
  },
  {
    question: 'In quanto tempo è pronto il sito?',
    answer: 'Dopo il pagamento, entro 48 ore lavorative iniziamo a costruire il sito. I tempi complessivi dipendono dai contenuti che ci invii: ti aggiorniamo a ogni passaggio e ti presentiamo il risultato in una call prima della pubblicazione.',
  },
  {
    question: 'Come funzionano le 12 rate?',
    answer: 'Il costo annuale viene suddiviso in 12 pagamenti mensili. La formula rateizzata prevede un impegno di 12 mesi. Scegliendo il pagamento in un’unica soluzione ottieni lo sconto indicato nel pacchetto.',
  },
  {
    question: 'Che differenza c’è tra i tre pacchetti?',
    answer: 'Il Sito Web ti dà la presenza online con Home, Menu o Servizi e Contatti. Con Sito + Prenotazioni aggiungi il sistema Locario: prenotazioni online, agenda, menu digitale con QR code e promemoria automatici. Con Sito + Professional ottieni il gestionale completo: prenotazioni illimitate, menu collegato al sito e aggiornato in automatico, CRM clienti, operatori, email marketing e molto altro.',
  },
  {
    question: 'Il dominio è compreso?',
    answer: 'Se possiedi già un dominio, possiamo collegarlo al nuovo sito. L’acquisto o il rinnovo di un nuovo dominio e gli eventuali servizi extra vengono indicati separatamente prima della conferma.',
  },
  {
    question: 'Posso aggiungere le prenotazioni in un secondo momento?',
    answer: 'Sì. Puoi iniziare dal pacchetto Sito Web e aggiungere successivamente il sistema di prenotazione Locario con la relativa pagina online.',
  },
  {
    question: 'Cosa succede dopo i primi 12 mesi?',
    answer: 'Il servizio non si rinnova da solo e non ci sono nuovi addebiti senza la tua conferma. Ti scriviamo 20 giorni prima della scadenza e poi ti ricordiamo la data 7, 3 e 1 giorno prima, con le condizioni per proseguire. Se non vuoi continuare, non devi fare nulla.',
  },
  {
    question: 'Come ricevo la fattura?',
    answer: 'Ti chiediamo la Partita IVA durante l’ordine, così possiamo emettere la fattura per il tuo acquisto.',
  },
  {
    question: 'Chi può acquistare?',
    answer: 'L’offerta è riservata a imprese e professionisti con Partita IVA, che acquistano per la propria attività. Non è destinata ai consumatori.',
  },
  {
    question: 'Chi fornisce testi, foto e menu?',
    answer: 'Il cliente fornisce logo, testi, immagini, menu o elenco servizi. Locario li organizza e li inserisce nel sito. Produzioni fotografiche, copywriting esteso o contenuti aggiuntivi possono essere preventivati a parte.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Creazione sito web per attività locali',
  provider: { '@type': 'Organization', name: 'Locario', url: 'https://locario.net' },
  areaServed: 'IT',
  description: 'Creazione di siti web professionali con Home, Menu o Servizi, Contatti e prenotazione online opzionale.',
  offers: [
    { '@type': 'Offer', name: 'Sito Web', price: schemaPrice(OFFER['sito-web'].singleCents), priceCurrency: 'EUR', description: `Pagamento annuale in unica soluzione con sconto del ${OFFER['sito-web'].discountPercent}%.` },
    { '@type': 'Offer', name: 'Sito Web con Prenotazioni', price: schemaPrice(OFFER['sito-prenotazioni'].singleCents), priceCurrency: 'EUR', description: `Pagamento annuale in unica soluzione con sconto del ${OFFER['sito-prenotazioni'].discountPercent}%.` },
    { '@type': 'Offer', name: 'Sito Web con gestionale Professional', price: schemaPrice(OFFER['sito-professional'].singleCents), priceCurrency: 'EUR', description: `Pagamento annuale in unica soluzione con sconto del ${OFFER['sito-professional'].discountPercent}%.` },
  ],
}

export default function SitoWebAttivitaLocaliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <JsonLd schema={buildFAQSchema(faqWebsite)} />

      {/* 1 · Hero */}
      <section className="relative flex min-h-[700px] items-center overflow-hidden pt-24">
        <Image src="/sito-web-locario-hero.webp" alt="Sito web con menu e prenotazione mostrato su computer e smartphone" fill priority className="object-cover object-[64%_center]" sizes="100vw" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,22,0.98)_0%,rgba(5,8,22,0.84)_42%,rgba(5,8,22,0.18)_76%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Siti web per attività locali</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Un sito che porta clienti, non solo una vetrina online</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">Lo creiamo noi. Tu ci racconti la tua attività, noi pensiamo a design, pubblicazione e assistenza. Con Locario i tuoi clienti prenotano da soli, a qualsiasi ora.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#pacchetti" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-gray-950 transition-transform hover:-translate-y-0.5">Scegli il tuo pacchetto <ArrowRight size={18} /></a>
              <Link href="/contatti?servizio=sito-web" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 bg-black/25 px-6 py-3 font-semibold text-white backdrop-blur-sm hover:bg-white/10">Parla con noi</Link>
            </div>
            <p className="mt-5 text-sm font-medium text-emerald-300">Da {euro(LOWEST_SINGLE_CENTS)} l&apos;anno in un&apos;unica soluzione, oppure in 12 rate</p>
            <ul className="mt-6 grid max-w-xl gap-x-6 gap-y-2 sm:grid-cols-2">
              {trust.map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/80"><ShieldCheck size={16} className="shrink-0 text-cyan-300" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 2 · Il problema */}
      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Ti riconosci?</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Prima di venire da te, i clienti ti cercano online. Cosa trovano?</h2>
          </div>
          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {pains.map(pain => (
              <li key={pain} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <X size={20} className="mt-0.5 shrink-0 text-red-400" />
                <span className="leading-relaxed text-white/75">{pain}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80">Un sito fatto bene risolve tutto questo. E non devi occupartene tu: <strong className="text-white">lo facciamo noi, dall&apos;inizio alla pubblicazione.</strong></p>
        </div>
      </section>

      {/* 3 · Vantaggi */}
      <section className="section-padding" style={{ background: '#0B1020' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Perché sceglierci</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Tutto ciò che serve, senza complicazioni</h2>
            <p className="mt-4 leading-relaxed text-white/60">Niente sezioni inutili, niente gergo tecnico, niente sorprese. Solo un sito curato e un partner che ti segue per un anno intero.</p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title} className="bg-[#111729] p-6">
                <Icon size={24} className="text-cyan-400" />
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Come funziona */}
      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Come funziona</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Dal primo clic al sito online, in quattro passaggi</h2>
          </div>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-cyan-400 text-sm font-bold text-[#050816]">{index + 1}</span>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5 · Il sito diventa uno strumento di lavoro */}
      <section className="section-padding" style={{ background: '#0B1020' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Il sito più Locario</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Il sito smette di essere una vetrina e diventa uno strumento di lavoro</h2>
            <p className="mt-4 leading-relaxed text-white/60">Un sito ti fa trovare. Il gestionale Locario trasforma chi ti trova in clienti che prenotano, tornano e ti raccomandano.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="rounded-lg border p-6 sm:p-8" style={{ background: 'rgba(108,99,255,0.10)', borderColor: 'rgba(108,99,255,0.55)' }}>
              <div className="flex items-center gap-3"><CalendarDays size={22} className="text-violet-300" /><h3 className="text-xl font-bold">Con Sito + Prenotazioni</h3></div>
              <p className="mt-2 text-sm text-white/60">Per ricevere prenotazioni anche quando sei occupato.</p>
              <ul className="mt-5 space-y-3">
                {bookingGains.map(item => <li key={item} className="flex items-start gap-3 text-sm text-white/85"><Check size={17} className="mt-0.5 shrink-0 text-cyan-400" /><span>{item}</span></li>)}
              </ul>
            </article>
            <article className="rounded-lg border border-white/10 bg-white/[0.035] p-6 sm:p-8">
              <div className="flex items-center gap-3"><Users size={22} className="text-cyan-300" /><h3 className="text-xl font-bold">Con Sito + Professional</h3></div>
              <p className="mt-2 text-sm text-white/60">Tutto il precedente, più gli strumenti per far crescere l&apos;attività.</p>
              <ul className="mt-5 space-y-3">
                {professionalGains.map(item => <li key={item} className="flex items-start gap-3 text-sm text-white/85"><Check size={17} className="mt-0.5 shrink-0 text-cyan-400" /><span>{item}</span></li>)}
              </ul>
            </article>
          </div>
          <div className="mt-6 grid gap-4 text-sm text-white/55 sm:grid-cols-3">
            <p className="flex items-start gap-2"><MenuSquare size={17} className="mt-0.5 shrink-0 text-cyan-400" />Con il Professional il menu lo aggiorni una volta e si aggiorna anche sul sito.</p>
            <p className="flex items-start gap-2"><Mail size={17} className="mt-0.5 shrink-0 text-cyan-400" />I promemoria partono da soli, senza che tu faccia nulla.</p>
            <p className="flex items-start gap-2"><BarChart3 size={17} className="mt-0.5 shrink-0 text-cyan-400" />Vedi da dove arrivano i clienti: Google, Instagram o WhatsApp.</p>
          </div>
        </div>
      </section>

      {/* 6 · Per chi è */}
      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Per chi è</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Per le attività che vivono di clienti locali</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">Locario è già usato per gestire prenotazioni e appuntamenti in questi settori. Il sito nasce su misura per il tuo.</p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {INDUSTRY_NAV.map(item => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm font-semibold text-white/85 transition-colors hover:border-cyan-400 hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7 · Pacchetti */}
      <WebsiteOfferPricing />

      {/* 8 · Cosa è incluso */}
      <section className="section-padding" style={{ background: '#0B1020' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Incluso nel progetto</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Sai cosa ricevi, prima di iniziare</h2></div>
          <div className="mt-9 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['3 pagine essenziali', 'Home, Menu o Servizi e Contatti. La pagina Prenotazioni è inclusa nei pacchetti con Locario.'],
              ['Contenuti iniziali', 'Inseriamo i materiali che ci fornisci e organizziamo le informazioni in modo chiaro.'],
              ['1 revisione inclusa', 'Controlli il sito prima della pubblicazione e raccogliamo le correzioni in un unico passaggio.'],
              ['Pubblicazione', 'Prepariamo il sito e lo rendiamo raggiungibile online sul dominio concordato.'],
              ['12 mesi di assistenza tecnica', 'Gestiamo funzionamento, sicurezza e aggiornamenti tecnici del sito.'],
              ['Costi extra concordati prima', 'Dominio nuovo, fotografie, testi estesi o pagine aggiuntive vengono quotati separatamente.'],
            ].map(([title, text]) => <div key={title} className="bg-[#111729] p-5"><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-white/55">{text}</p></div>)}
          </div>
        </div>
      </section>

      {/* 9 · Chiusura */}
      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Pronto a far partire il tuo sito?</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/65">Scegli il pacchetto, rispondi a poche domande e paga in modo sicuro. Entro 48 ore lavorative iniziamo a lavorare sul tuo sito.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#pacchetti" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-gray-950 transition-transform hover:-translate-y-0.5">Scegli il tuo pacchetto <ArrowRight size={18} /></a>
            <Link href="/contatti?servizio=sito-web" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/10">Preferisci parlarne? Scrivici</Link>
          </div>
          <p className="mt-5 text-xs text-white/40">Offerta riservata a imprese e professionisti con Partita IVA · Nessun rinnovo automatico · 12 mesi di assistenza inclusi</p>
        </div>
      </section>

      <FAQ items={faqWebsite} title="Domande frequenti" />
    </>
  )
}
