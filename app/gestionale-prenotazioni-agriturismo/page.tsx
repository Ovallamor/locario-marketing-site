import type { Metadata } from 'next'
import { SeoSiloPage } from '@/components/SeoSiloPage'
import { generateMetadata as genMeta } from '@/lib/seo'
import { SILO_PAGES } from '@/lib/silo-pages'

const page = SILO_PAGES.gestionalePrenotazioniAgriturismo

export const metadata: Metadata = genMeta({
  title: page.metadata.title,
  description: page.metadata.description,
  path: page.path,
  keywords: page.metadata.keywords,
})

export default function Page() {
  return <SeoSiloPage page={page} />
}