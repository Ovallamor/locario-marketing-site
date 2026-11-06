import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Contact, Globe2, MenuSquare, Smartphone, Wrench } from 'lucide-react'
import { WebsiteOfferPricing } from '@/components/WebsiteOfferPricing'
import { FAQ } from '@/components/FAQ'
import { JsonLd } from '@/components/JsonLd'
import { generateMetadata as genMeta, buildFAQSchema } from '@/lib/seo'
import type { FAQItem } from '@/lib/constants'

export const metadata: Metadata = genMeta({
  title: 'Creazione Sito Web per Attività Locali da 151,20€',
  description: 'Sito web professionale con Home, Menu e Contatti. Aggiungi Locario per ricevere prenotazioni online. Da 151,20€ l’anno in unica soluzione.',
  path: '/sito-web-attivita-locali',
  keywords: [
    'creazione sito web attività locale',
    'sito web ristorante economico',
    'sito web con prenotazioni online',
    'sito web menu ristorante',
    'sito web professionale piccola attività',
  ],
})

const pages = [
  { icon: Globe2, title: 'Home', text: 'Presenta la tua attività, i punti di forza e ciò che ti rende diverso.' },
  { icon: MenuSquare, title: 'Menu o Servizi', text: 'Mostra piatti, trattamenti o servizi in modo chiaro anche da smartphone.' },
  { icon: Contact, title: 'Contatti', text: 'Telefono, WhatsApp, orari, indirizzo e indicazioni sempre facili da trovare.' },
  { icon: CalendarDays, title: 'Prenotazioni', text: 'Pagina opzionale collegata a Locario per ricevere richieste 24 ore su 24.' },
]

const faqWebsite: FAQItem[] = [
  {
    question: 'Cosa comprende il pacchetto Sito Web?',
    answer: 'Comprende la realizzazione delle pagine Home, Menu o Servizi e Contatti, l’adattamento per smartphone e computer, il caricamento iniziale dei contenuti forniti dal cliente, una revisione prima della pubblicazione e 12 mesi di assistenza tecnica.',
  },
  {
    question: 'Come funzionano le 12 rate?',
    answer: 'Il costo annuale viene suddiviso in 12 pagamenti mensili. La formula rateizzata prevede un impegno di 12 mesi. Scegliendo il pagamento in un’unica soluzione ottieni lo sconto indicato nel pacchetto.',
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
    answer: 'Prima della scadenza ricevi le condizioni per il rinnovo del sito e degli eventuali servizi Locario. Nessun servizio aggiuntivo viene attivato senza conferma.',
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
    { '@type': 'Offer', name: 'Sito Web', price: '151.20', priceCurrency: 'EUR', description: 'Pagamento annuale in unica soluzione con sconto del 20%.' },
    { '@type': 'Offer', name: 'Sito Web con Prenotazioni', price: '445.71', priceCurrency: 'EUR', description: 'Pagamento annuale in unica soluzione con sconto del 17%.' },
  ],
}

export default function SitoWebAttivitaLocaliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <JsonLd schema={buildFAQSchema(faqWebsite)} />
      <section className="relative flex min-h-[680px] items-center overflow-hidden pt-24">
        <Image src="/sito-web-locario-hero.webp" alt="Sito web con menu e prenotazione mostrato su computer e smartphone" fill priority className="object-cover object-[64%_center]" sizes="100vw" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,22,0.98)_0%,rgba(5,8,22,0.84)_42%,rgba(5,8,22,0.18)_76%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Siti web Locario</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Il tuo sito professionale, pronto a lavorare per te</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">Home, menu e contatti in un sito veloce e curato. Quando vuoi, aggiungi le prenotazioni online e gestisci tutto con Locario.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#pacchetti" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-gray-950 transition-transform hover:-translate-y-0.5">Vedi i pacchetti <ArrowRight size={18} /></a>
              <Link href="/contatti?servizio=sito-web" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/25 bg-black/25 px-6 py-3 font-semibold text-white backdrop-blur-sm hover:bg-white/10">Parla con noi</Link>
            </div>
            <p className="mt-5 text-sm font-medium text-emerald-300">Da €151,20 l&apos;anno in un&apos;unica soluzione</p>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Tutto ciò che serve</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Un sito semplice da usare e bello da vedere</h2>
            <p className="mt-4 leading-relaxed text-white/60">Costruiamo le pagine che i tuoi clienti cercano davvero, senza sezioni inutili e senza complicazioni tecniche.</p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {pages.map(({ icon: Icon, title, text }) => (
              <article key={title} className="bg-[#0B1020] p-6">
                <Icon size={24} className="text-cyan-400" />
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WebsiteOfferPricing />

      <section className="section-padding" style={{ background: '#0B1020' }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Incluso nel progetto</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Sai cosa ricevi, prima di iniziare</h2></div>
          <div className="mt-9 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['3 pagine essenziali', 'Home, Menu o Servizi e Contatti. La pagina Prenotazioni è inclusa nel pacchetto completo.'],
              ['Contenuti iniziali', 'Inseriamo i materiali che ci fornisci e organizziamo le informazioni in modo chiaro.'],
              ['1 revisione inclusa', 'Controlli il sito prima della pubblicazione e raccogliamo le correzioni in un unico passaggio.'],
              ['Pubblicazione', 'Prepariamo il sito e lo rendiamo raggiungibile online sul dominio concordato.'],
              ['12 mesi di assistenza tecnica', 'Gestiamo funzionamento, sicurezza e aggiornamenti tecnici del sito.'],
              ['Costi extra concordati prima', 'Dominio nuovo, fotografie, testi estesi o pagine aggiuntive vengono quotati separatamente.'],
            ].map(([title, text]) => <div key={title} className="bg-[#111729] p-5"><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-white/55">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Pensiamo a tutto noi</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Tu ci dai i contenuti. Noi mettiamo online il sito.</h2>
          </div>
          <div className="grid gap-5">
            {[
              { icon: Smartphone, title: 'Perfetto su mobile', text: 'Ogni pagina si adatta a smartphone, tablet e computer.' },
              { icon: Wrench, title: 'Nessuna gestione tecnica', text: 'Configurazione, pubblicazione e aggiornamenti tecnici sono inclusi.' },
              { icon: CalendarDays, title: 'Prenotazioni quando servono', text: 'Puoi partire con il sito e aggiungere Locario scegliendo il pacchetto completo.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 border-b border-white/10 pb-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/5"><Icon size={21} className="text-violet-300" /></div>
                <div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-white/55">{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#0B1020' }}>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Porta la tua attività online con un prezzo chiaro</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">Raccontaci cosa fai. Ti aiutiamo a scegliere il pacchetto giusto e prepariamo il sito intorno alla tua attività.</p>
          <Link href="/contatti?servizio=sito-web" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-gray-950 transition-transform hover:-translate-y-0.5">Richiedi informazioni <ArrowRight size={18} /></Link>
        </div>
      </section>

      <FAQ items={faqWebsite} title="Domande sul sito e sui pagamenti" />
    </>
  )
}
