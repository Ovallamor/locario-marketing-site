'use client'

import { FormEvent, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, CreditCard, Lock, Store, Upload, WalletCards } from 'lucide-react'
import TurnstileWidget, { turnstileEnabled } from '@/components/TurnstileWidget'
import { OFFER, type PackageId, type PaymentId } from '@/lib/website-offer'
import { LAST_LEGAL_UPDATE } from '@/lib/legal'

const steps = ['Pacchetto', 'Attività', 'Contenuti', 'Pagamento']

const prices = {
  'sito-web': { name: OFFER['sito-web'].name, single: OFFER['sito-web'].singleCents / 100, monthly: OFFER['sito-web'].monthlyCents / 100, total: OFFER['sito-web'].yearlyCents / 100 },
  'sito-prenotazioni': { name: OFFER['sito-prenotazioni'].name, single: OFFER['sito-prenotazioni'].singleCents / 100, monthly: OFFER['sito-prenotazioni'].monthlyCents / 100, total: OFFER['sito-prenotazioni'].yearlyCents / 100 },
  'sito-professional': { name: OFFER['sito-professional'].name, single: OFFER['sito-professional'].singleCents / 100, monthly: OFFER['sito-professional'].monthlyCents / 100, total: OFFER['sito-professional'].yearlyCents / 100 },
} as const

const packageBlurb: Record<PackageId, string> = {
  'sito-web': 'Home, menu o servizi e contatti.',
  'sito-prenotazioni': 'Sito con menu digitale, agenda e prenotazioni Locario.',
  'sito-professional': 'Sito con gestionale completo: CRM clienti, operatori e marketing.',
}

const euro = (value: number) => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value)

export function WebsiteOrderFlow({ initialPackage, initialPayment }: { initialPackage: PackageId; initialPayment: PaymentId }) {
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [captchaReset, setCaptchaReset] = useState(0)
  const [form, setForm] = useState({
    packageId: initialPackage,
    paymentId: initialPayment,
    businessName: '',
    businessType: '',
    vatNumber: '',
    address: '',
    city: '',
    contactName: '',
    email: '',
    phone: '',
    discoverySource: '',
    salesRepresentative: '',
    existingDomain: '',
    hasLogo: 'yes',
    menuType: 'menu',
    notes: '',
    privacy: false,
    termsSpecific: false,
    businessOnly: false,
  })
  const selected = prices[form.packageId as PackageId]
  const isMonthly = form.paymentId === '12-rate'
  const update = (name: string, value: string | boolean) => setForm(current => ({ ...current, [name]: value }))

  const canContinue = useMemo(() => {
    if (step === 1) return Boolean(
      form.businessName && form.businessType && form.vatNumber.trim() && form.address && form.city && form.contactName && form.email && form.phone &&
      form.discoverySource && (form.discoverySource !== 'commerciale' || form.salesRepresentative)
    )
    if (step === 3) return form.privacy && form.termsSpecific && form.businessOnly && (!turnstileEnabled || Boolean(captchaToken))
    return true
  }, [step, form, captchaToken])

  function next(event: FormEvent) {
    event.preventDefault()
    if (!canContinue) return setError('Completa tutti i campi obbligatori per continuare.')
    setError('')
    setStep(current => Math.min(current + 1, steps.length - 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function checkout() {
    if (!form.privacy) return setError('Devi accettare l’informativa privacy per continuare.')
    if (!form.termsSpecific || !form.businessOnly) return setError('Per continuare servono tutte le conferme sui termini del servizio.')
    if (turnstileEnabled && !captchaToken) return setError('Completa la verifica anti-bot per continuare.')
    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/website-order/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, captchaToken, termsVersion: LAST_LEGAL_UPDATE }),
      })
      const body = await response.json()
      if (!response.ok || !body.url) throw new Error(body.error || 'Impossibile avviare il pagamento.')
      window.location.href = body.url
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Impossibile avviare il pagamento.')
      setCaptchaReset(n => n + 1)
      setLoading(false)
    }
  }

  const fieldClass = 'mt-2 min-h-12 w-full rounded-lg border border-white/15 bg-white/[0.06] px-4 text-white outline-none transition focus:border-cyan-400 placeholder:text-white/35'

  return (
    <main className="min-h-screen bg-[#050816] pb-20 pt-28 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Link href="/sito-web-attivita-locali#pacchetti" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"><ArrowLeft size={16} /> Torna all’offerta</Link>
        <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_300px]">
          <section>
            <p className="text-sm font-bold uppercase text-cyan-400">Il tuo sito, passo dopo passo</p>
            <h1 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">Raccontaci la tua attività. Al resto pensiamo noi.</h1>
            <p className="mt-3 max-w-2xl text-white/60">Servono pochi minuti. Prima di pagare vedrai sempre il riepilogo completo, senza costi nascosti.</p>

            <ol className="mt-8 grid grid-cols-4 gap-2" aria-label="Avanzamento ordine">
              {steps.map((label, index) => <li key={label} className="min-w-0"><div className={`h-1 rounded-full ${index <= step ? 'bg-cyan-400' : 'bg-white/10'}`} /><span className={`mt-2 block truncate text-xs ${index === step ? 'text-white' : 'text-white/40'}`}>{label}</span></li>)}
            </ol>

            <form onSubmit={next} className="mt-8 rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:p-8">
              {step === 0 && <div><h2 className="text-2xl font-bold">Cosa vuoi attivare?</h2><p className="mt-2 text-sm text-white/55">Puoi cambiare scelta prima del pagamento.</p><div className="mt-6 grid gap-4 sm:grid-cols-3">{(Object.entries(prices) as [PackageId, typeof prices[PackageId]][]).map(([id, item]) => <button type="button" key={id} onClick={() => update('packageId', id)} className={`text-left rounded-lg border p-5 transition ${form.packageId === id ? 'border-cyan-400 bg-cyan-400/10' : 'border-white/10 hover:border-white/30'}`}><Store size={22} className="text-cyan-400" /><strong className="mt-4 block text-lg">{item.name}</strong><span className="mt-1 block text-sm text-white/55">{packageBlurb[id]}</span>{form.packageId === id && <span className="mt-4 flex items-center gap-2 text-sm font-semibold text-cyan-300"><Check size={16} /> Selezionato</span>}</button>)}</div></div>}

              {step === 1 && <div><h2 className="text-2xl font-bold">Conosciamo la tua attività</h2><p className="mt-2 text-sm text-white/55">Questi dati ci servono per preparare il sito e ricontattarti.</p><div className="mt-6 grid gap-5 sm:grid-cols-2">{[
                ['businessName','Nome attività *','Il nome che vedranno i clienti'], ['businessType','Tipo di attività *','Ristorante, centro estetico...'], ['vatNumber','Partita IVA *','11 cifre'], ['contactName','Nome del referente *','Nome e cognome'], ['email','Email *','nome@attivita.it'], ['phone','Telefono *','Numero di contatto'], ['address','Indirizzo *','Via e numero civico'], ['city','Città *','Comune e provincia'],
              ].map(([name,label,placeholder]) => <label key={name} className={name === 'address' ? 'sm:col-span-1' : ''}><span className="text-sm font-semibold">{label}</span><input name={name} type={name === 'email' ? 'email' : name === 'phone' ? 'tel' : 'text'} required={label.includes('*')} value={form[name as keyof typeof form] as string} onChange={e => update(name,e.target.value)} placeholder={placeholder} className={fieldClass} /></label>)}
                <label className="sm:col-span-2">
                  <span className="text-sm font-semibold">Come hai conosciuto la nostra promozione? *</span>
                  <select name="discoverySource" required value={form.discoverySource} onChange={e => { update('discoverySource', e.target.value); if (e.target.value !== 'commerciale') update('salesRepresentative', '') }} className={fieldClass}>
                    <option className="text-black" value="">Seleziona una risposta</option>
                    <option className="text-black" value="google">Google</option>
                    <option className="text-black" value="social">Social</option>
                    <option className="text-black" value="commerciale">Un nostro commerciale</option>
                    <option className="text-black" value="passaparola">Passaparola</option>
                    <option className="text-black" value="altro">Altro</option>
                  </select>
                </label>
                {form.discoverySource === 'commerciale' && (
                  <label className="sm:col-span-2">
                    <span className="text-sm font-semibold">Nome e cognome del commerciale *</span>
                    <input name="salesRepresentative" type="text" required value={form.salesRepresentative} onChange={e => update('salesRepresentative', e.target.value)} placeholder="Chi ti ha presentato l’offerta?" className={fieldClass} />
                    <span className="mt-2 block text-xs text-white/45">Ci aiuta ad attribuire correttamente la richiesta.</span>
                  </label>
                )}
              </div></div>}

              {step === 2 && <div><h2 className="text-2xl font-bold">Prepariamo il materiale giusto</h2><p className="mt-2 text-sm text-white/55">Non serve avere tutto pronto: ti aiuteremo noi a raccoglierlo.</p><div className="mt-6 grid gap-5 sm:grid-cols-2"><label><span className="text-sm font-semibold">Hai già un dominio?</span><input value={form.existingDomain} onChange={e => update('existingDomain', e.target.value)} placeholder="es. ilmioristorante.it" className={fieldClass} /></label><label><span className="text-sm font-semibold">Hai già un logo?</span><select value={form.hasLogo} onChange={e => update('hasLogo',e.target.value)} className={fieldClass}><option className="text-black" value="yes">Sì, lo invierò dopo</option><option className="text-black" value="no">No, ho bisogno di aiuto</option></select></label><label className="sm:col-span-2"><span className="text-sm font-semibold">Cosa vuoi mostrare?</span><select value={form.menuType} onChange={e => update('menuType',e.target.value)} className={fieldClass}><option className="text-black" value="menu">Menu e piatti</option><option className="text-black" value="services">Servizi e listino</option><option className="text-black" value="both">Menu/servizi e altre informazioni</option></select></label><label className="sm:col-span-2"><span className="text-sm font-semibold">Raccontaci come immagini il sito</span><textarea value={form.notes} onChange={e => update('notes',e.target.value)} rows={5} placeholder="Colori, stile, pagine o richieste particolari..." className={`${fieldClass} py-3`} /></label></div><div className="mt-6 flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm text-white/60"><Upload size={20} className="mt-0.5 shrink-0 text-cyan-400" /><p>Dopo il pagamento riceverai un link semplice per inviarci logo, foto, menu e testi. Non devi caricare tutto adesso.</p></div></div>}

              {step === 3 && <div><h2 className="text-2xl font-bold">Come preferisci pagare?</h2><p className="mt-2 text-sm text-white/55">Il pagamento è gestito in modo sicuro da Stripe. Locario non conserva i dati della carta.</p><div className="mt-6 grid gap-4 sm:grid-cols-2"><button type="button" onClick={() => update('paymentId','unica-soluzione')} className={`text-left rounded-lg border p-5 ${!isMonthly ? 'border-cyan-400 bg-cyan-400/10' : 'border-white/10'}`}><WalletCards className="text-cyan-400" /><strong className="mt-4 block">Unica soluzione</strong><span className="mt-2 block text-2xl font-bold">{euro(selected.single)}</span><span className="text-xs text-emerald-300">Il prezzo più conveniente</span></button><button type="button" onClick={() => update('paymentId','12-rate')} className={`text-left rounded-lg border p-5 ${isMonthly ? 'border-cyan-400 bg-cyan-400/10' : 'border-white/10'}`}><CreditCard className="text-cyan-400" /><strong className="mt-4 block">12 rate mensili</strong><span className="mt-2 block text-2xl font-bold">{euro(selected.monthly)} / mese</span><span className="text-xs text-white/50">Totale annuale {euro(selected.total)}</span></button></div><label className="mt-6 flex items-start gap-3 text-sm text-white/70"><input type="checkbox" checked={form.privacy} onChange={e => update('privacy',e.target.checked)} className="mt-1 h-4 w-4 accent-cyan-400" /><span>Ho letto e accetto l’<Link href="/privacy" target="_blank" className="text-cyan-300 underline">informativa privacy</Link> e i <Link href="/termini" target="_blank" className="text-cyan-300 underline">termini di servizio</Link>, comprese le condizioni economiche dell’offerta. *</span></label><label className="mt-4 flex items-start gap-3 text-sm text-white/70"><input type="checkbox" checked={form.termsSpecific} onChange={e => update('termsSpecific',e.target.checked)} className="mt-1 h-4 w-4 accent-cyan-400" /><span>Approvo specificamente, ai sensi degli artt. 1341 e 1342 del Codice civile, le clausole 7.2 (proprietà del sito e licenza d’uso), 7.5 (impegno di 12 mesi e sospensione), 7.8 (nessuna garanzia di risultato), 7.9 (sospensione e risoluzione) e gli articoli 12 e 14 dei <Link href="/termini#7-servizio-di-creazione-siti-web" target="_blank" className="text-cyan-300 underline">termini di servizio</Link>. *</span></label><label className="mt-4 flex items-start gap-3 text-sm text-white/70"><input type="checkbox" checked={form.businessOnly} onChange={e => update('businessOnly',e.target.checked)} className="mt-1 h-4 w-4 accent-cyan-400" /><span>Dichiaro di acquistare per la mia attività (impresa o professionista con Partita IVA) e non come consumatore. *</span></label><div className="mt-5"><TurnstileWidget onToken={setCaptchaToken} resetKey={captchaReset} theme="dark" /></div></div>}

              {error && <p role="alert" className="mt-5 rounded-lg border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-200">{error}</p>}
              <div className="mt-8 flex items-center justify-between gap-3 border-t border-white/10 pt-6">{step > 0 ? <button type="button" onClick={() => { setStep(step - 1); setError('') }} className="min-h-11 px-3 text-sm font-semibold text-white/65 hover:text-white">Indietro</button> : <span />}{step < 3 ? <button type="submit" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-white px-6 font-bold text-[#050816]">Continua <ArrowRight size={17} /></button> : <button type="button" disabled={loading || !form.privacy || !form.termsSpecific || !form.businessOnly || (turnstileEnabled && !captchaToken)} onClick={checkout} className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-cyan-400 px-6 font-bold text-[#050816] disabled:cursor-not-allowed disabled:opacity-50"><Lock size={16} /> {loading ? 'Apertura pagamento...' : 'Vai al pagamento sicuro'}</button>}</div>
            </form>
          </section>

          <aside className="h-fit rounded-lg border border-white/10 bg-white/[0.04] p-5 lg:sticky lg:top-28"><p className="text-xs font-bold uppercase text-white/45">Il tuo ordine</p><h2 className="mt-3 text-xl font-bold">{selected.name}</h2><p className="mt-1 text-sm text-white/55">12 mesi di servizio e assistenza inclusi.</p><div className="my-5 border-y border-white/10 py-5"><strong className="text-3xl">{isMonthly ? euro(selected.monthly) : euro(selected.single)}</strong><span className="text-sm text-white/50">{isMonthly ? ' / mese' : ' / anno'}</span>{isMonthly && <p className="mt-1 text-xs text-white/45">Impegno annuale · totale {euro(selected.total)}</p>}</div><ul className="space-y-3 text-sm text-white/70"><li className="flex gap-2"><Check size={16} className="shrink-0 text-emerald-400" /> Sito ottimizzato per mobile</li><li className="flex gap-2"><Check size={16} className="shrink-0 text-emerald-400" /> Pubblicazione inclusa</li><li className="flex gap-2"><Check size={16} className="shrink-0 text-emerald-400" /> Assistenza per 12 mesi</li>{form.packageId === 'sito-prenotazioni' && <li className="flex gap-2"><Check size={16} className="shrink-0 text-emerald-400" /> Sistema prenotazioni Locario</li>}{form.packageId === 'sito-professional' && <li className="flex gap-2"><Check size={16} className="shrink-0 text-emerald-400" /> Gestionale Locario Professional</li>}</ul><p className="mt-5 text-xs text-white/35">Il prezzo indicato è quello che paghi: IVA non applicata. Il servizio dura 12 mesi e non si rinnova da solo. Prima della pubblicazione confermeremo con te testi e contenuti.</p></aside>
        </div>
      </div>
    </main>
  )
}
