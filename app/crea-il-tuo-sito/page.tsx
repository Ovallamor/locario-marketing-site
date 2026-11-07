import type { Metadata } from 'next'
import { WebsiteOrderFlow } from '@/components/WebsiteOrderFlow'

export const metadata: Metadata = {
  title: 'Crea il tuo sito web | Locario',
  description: 'Configura il sito della tua attività e scegli la modalità di pagamento.',
  robots: { index: false, follow: false },
}

export default async function CreateWebsitePage({
  searchParams,
}: {
  searchParams: Promise<{ pacchetto?: string; pagamento?: string }>
}) {
  const params = await searchParams
  const initialPackage =
    params.pacchetto === 'sito-prenotazioni' || params.pacchetto === 'sito-professional' ? params.pacchetto : 'sito-web'
  const initialPayment = params.pagamento === '12-rate' ? '12-rate' : 'unica-soluzione'

  return <WebsiteOrderFlow initialPackage={initialPackage} initialPayment={initialPayment} />
}
