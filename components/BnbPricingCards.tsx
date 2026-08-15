'use client'

// components/BnbPricingCards.tsx
// Prezzi dedicati al modulo B&B — piano proprio, separato dai 3 piani generici
// (Starter/Professional/Business), stesso linguaggio visivo di PricingCards.tsx
// ma dati e componente separati: le due strutture di prezzo non hanno nulla in comune.

import { useState } from 'react'
import { Check } from 'lucide-react'
import { TrialLink } from '@/components/TrialLink'

type BillingCycle = 'monthly' | 'annual'

interface BnbPlan {
  id: string
  name: string
  tagline: string
  monthlyPrice: string
  annualPrice: string
  annualMonthly: string
  highlighted: boolean
  badge: string | null
  features: string[]
  ctaSource: string
}

const bnbPlans: BnbPlan[] = [
  {
    id: 'bnb-essenziale',
    name: 'B&B Essenziale',
    tagline: 'Per una singola struttura che vuole gestire tutto — camere, canali, burocrazia — in un solo posto.',
    monthlyPrice: '€49/mese',
    annualPrice: '€490/anno',
    annualMonthly: '€40,83/mese',
    highlighted: false,
    badge: null,
    features: [
      'Camere e soggiorni illimitati',
      'Calendario e pricing dinamico stagionale',
      'Soggiorno minimo per notti',
      'Sync iCal con Airbnb e Booking.com',
      'Rilevamento conflitti di calendario',
      'Check-in online con anagrafica ospiti',
      'Invio schedine Alloggiati Web',
      'Rendicontazione ROSS1000',
      'Caparra, saldo e tassa di soggiorno online',
      'Regolamento della casa e guida di benvenuto',
      'Gestione pulizie camere',
      'Automazioni ospite (promemoria, recensioni)',
      'Amenità in stile Airbnb',
      'Pagine pubbliche stile Airbnb + widget',
      'CRM ospiti e ricevuta di soggiorno',
      'Analytics dedicata (occupazione, ADR, RevPAR)',
      'App mobile',
      '1 utente incluso',
      'Comparsa su prenota.locario.net',
    ],
    ctaSource: 'pricing-bnb-essenziale',
  },
  {
    id: 'bnb-multi',
    name: 'B&B Multi-struttura',
    tagline: 'Per chi gestisce più B&B o case vacanza sullo stesso account.',
    monthlyPrice: '€89/mese',
    annualPrice: '€890/anno',
    annualMonthly: '€74,17/mese',
    highlighted: true,
    badge: 'Per più strutture',
    features: [
      'Tutto B&B Essenziale',
      'Stripe Connect multi-struttura',
      'Riepilogo unico di tutte le strutture',
      'Notifiche WhatsApp',
      'Utenti illimitati',
      'Supporto prioritario',
    ],
    ctaSource: 'pricing-bnb-multi',
  },
]

export const BnbPricingCards = () => {
  const [cycle, setCycle] = useState<BillingCycle>('monthly')

  return (
    <section className="section-padding" style={{ background: '#050816' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Un piano{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #F43F5E, #6C63FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              pensato per l&apos;ospitalità
            </span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#A1A1AA' }}>
            Separato dai piani per ristoranti e saloni: qui dentro c&apos;è solo quello che serve a un B&amp;B.
          </p>

          {/* Toggle mensile/annuale */}
          <div className="inline-flex items-center gap-1 mt-8 p-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <button
              onClick={() => setCycle('monthly')}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={cycle === 'monthly' ? { background: '#F43F5E', color: '#fff' } : { color: '#A1A1AA' }}
            >
              Mensile
            </button>
            <button
              onClick={() => setCycle('annual')}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={cycle === 'annual' ? { background: '#F43F5E', color: '#fff' } : { color: '#A1A1AA' }}
            >
              Annuale <span style={{ color: cycle === 'annual' ? '#fff' : '#22C55E' }}>-17%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {bnbPlans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-2xl p-8 flex flex-col"
              style={
                plan.highlighted
                  ? { background: 'rgba(244, 63, 94, 0.06)', border: '1px solid rgba(244, 63, 94, 0.4)' }
                  : { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }
              }
            >
              {plan.badge && (
                <span
                  className="inline-flex self-start items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{ background: 'rgba(244, 63, 94, 0.15)', color: '#F43F5E' }}
                >
                  {plan.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-sm mb-5" style={{ color: '#A1A1AA' }}>{plan.tagline}</p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-white">
                  {cycle === 'monthly' ? plan.monthlyPrice : plan.annualMonthly}
                </span>
                {cycle === 'annual' && (
                  <div className="text-xs mt-1" style={{ color: '#22C55E' }}>
                    {plan.annualPrice} fatturati una volta l&apos;anno
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={14} className="flex-shrink-0 mt-0.5" style={{ color: plan.highlighted ? '#F43F5E' : '#22C55E' }} />
                    <span className="text-sm" style={{ color: '#A1A1AA' }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <TrialLink
                source={plan.ctaSource}
                className="block text-center py-4 rounded-xl font-semibold text-sm transition-all duration-200"
                style={
                  plan.highlighted
                    ? { background: 'linear-gradient(135deg, #F43F5E, #6C63FF)', color: '#fff', boxShadow: '0 4px 20px rgba(244, 63, 94, 0.35)' }
                    : { border: '1px solid rgba(255,255,255,0.2)', color: 'white', background: 'transparent' }
                }
              >
                Inizia la prova gratis
              </TrialLink>
            </div>
          ))}
        </div>

        <p className="text-xs text-center mt-8 max-w-2xl mx-auto" style={{ color: '#71717A' }}>
          Prezzi IVA esclusa. Prezzo fisso al mese, zero commissioni sulle prenotazioni. 30 giorni di prova gratuita, nessuna carta richiesta.
        </p>
      </div>
    </section>
  )
}
