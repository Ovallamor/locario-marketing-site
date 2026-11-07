import Link from 'next/link'
import { ArrowRight, Globe2 } from 'lucide-react'
import { LOWEST_SINGLE_CENTS, euro } from '@/lib/website-offer'

/** Banner della home che porta alla pagina di vendita dei siti web. */
export function WebsiteOfferBanner() {
  return (
    <section className="py-12" style={{ background: '#050816' }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col gap-6 rounded-lg border p-6 sm:p-8 md:flex-row md:items-center md:justify-between"
          style={{ background: 'rgba(108,99,255,0.10)', borderColor: 'rgba(108,99,255,0.55)' }}
        >
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white/10"><Globe2 size={24} className="text-cyan-300" /></span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Novità · Siti web Locario</p>
              <h2 className="mt-1 text-2xl font-bold sm:text-3xl">Ti serve anche il sito? Lo creiamo noi.</h2>
              <p className="mt-2 max-w-2xl text-white/65">Home, menu e contatti, con prenotazioni online e gestionale Locario quando vuoi. Assistenza di 12 mesi inclusa, da {euro(LOWEST_SINGLE_CENTS)} l&apos;anno.</p>
            </div>
          </div>
          <Link href="/sito-web-attivita-locali" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-gray-950 transition-transform hover:-translate-y-0.5">
            Scopri i pacchetti <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
