import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

export const metadata = { title: 'Richiesta confermata | Locario', robots: { index: false, follow: false } }

export default function ConfirmationPage() {
  return <main className="flex min-h-screen items-center justify-center bg-[#050816] px-4 text-white"><section className="max-w-xl text-center"><CheckCircle2 size={56} className="mx-auto text-emerald-400" /><p className="mt-6 text-sm font-bold uppercase text-cyan-400">Pagamento ricevuto</p><h1 className="mt-3 text-4xl font-bold">Iniziamo a costruire il tuo sito.</h1><p className="mt-4 leading-relaxed text-white/60">Riceverai una conferma via email e il link per inviarci logo, foto, menu e testi. Il nostro team controllerà i dati e ti contatterà per definire i prossimi passaggi.</p><Link href="/" className="mt-8 inline-flex min-h-12 items-center rounded-lg bg-white px-6 font-bold text-[#050816]">Torna a Locario</Link></section></main>
}
