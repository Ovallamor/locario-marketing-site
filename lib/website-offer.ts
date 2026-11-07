// lib/website-offer.ts
// UNICA fonte dei prezzi dell'offerta "Sito Web". Pagina promozionale, flusso d'ordine,
// metadati SEO e dati strutturati leggono tutti da qui.
//
// Gli importi veri addebitati sono i Price ID di Stripe nel SaaS (STRIPE_PRICE_WEBSITE_*):
// se qui cambi un prezzo, va cambiato anche il prezzo corrispondente in Stripe.
// Tutti gli importi sono in centesimi per evitare errori di arrotondamento.

export type PackageId = 'sito-web' | 'sito-prenotazioni' | 'sito-professional'
export type PaymentId = 'unica-soluzione' | '12-rate'

/** Costo annuale del solo sito. */
const SITE_YEARLY_CENTS = 18_900
/** Sistema di prenotazioni Locario (piano Starter), al mese. */
const BOOKING_MONTHLY_CENTS = 2_900
/** Gestionale Locario Professional, al mese. */
const PROFESSIONAL_MONTHLY_CENTS = 6_900

const PACKAGE_DEFS = {
  'sito-web': {
    id: 'sito-web' as const,
    name: 'Sito Web',
    yearlyCents: SITE_YEARLY_CENTS,
    discountPercent: 20,
  },
  'sito-prenotazioni': {
    id: 'sito-prenotazioni' as const,
    name: 'Sito + Prenotazioni',
    yearlyCents: SITE_YEARLY_CENTS + BOOKING_MONTHLY_CENTS * 12,
    discountPercent: 17,
  },
  'sito-professional': {
    id: 'sito-professional' as const,
    name: 'Sito + Professional',
    yearlyCents: SITE_YEARLY_CENTS + PROFESSIONAL_MONTHLY_CENTS * 12,
    discountPercent: 17,
  },
}

export interface OfferPackage {
  id: PackageId
  name: string
  /** Totale annuale pagando a rate. */
  yearlyCents: number
  /** Rata mensile (12 rate). */
  monthlyCents: number
  /** Totale annuale pagando in unica soluzione, sconto già applicato. */
  singleCents: number
  discountPercent: number
}

export const OFFER: Record<PackageId, OfferPackage> = Object.fromEntries(
  Object.values(PACKAGE_DEFS).map(def => [
    def.id,
    {
      id: def.id,
      name: def.name,
      yearlyCents: def.yearlyCents,
      monthlyCents: def.yearlyCents / 12,
      singleCents: Math.round(def.yearlyCents * (100 - def.discountPercent) / 100),
      discountPercent: def.discountPercent,
    },
  ]),
) as Record<PackageId, OfferPackage>

export const SITE_MONTHLY_CENTS = SITE_YEARLY_CENTS / 12
export const BOOKING_MONTHLY = BOOKING_MONTHLY_CENTS
export const PROFESSIONAL_MONTHLY = PROFESSIONAL_MONTHLY_CENTS

/** Prezzo più basso dell'offerta (per titoli e dati strutturati). */
export const LOWEST_SINGLE_CENTS = Math.min(...Object.values(OFFER).map(p => p.singleCents))

export function euro(cents: number): string {
  return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(cents / 100)
}

/** "151.20" — formato richiesto da schema.org. */
export function schemaPrice(cents: number): string {
  return (cents / 100).toFixed(2)
}

/** "151,20€" — formato compatto per titoli e meta description. */
export function shortEuro(cents: number): string {
  return `${(cents / 100).toFixed(2).replace('.', ',')}€`
}
