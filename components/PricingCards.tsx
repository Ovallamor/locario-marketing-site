'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Zap } from 'lucide-react'
import { LINKS } from '@/lib/constants'
import { TrialLink } from '@/components/TrialLink'

type BillingCycle = 'monthly' | 'annual'

interface Plan {
  id: string
  name: string
  tagline: string
  monthlyPrice: string
  annualPrice: string
  annualMonthly: string
  highlighted: boolean
  badge: string | null
  hasSetup: boolean
  features: string[]
  cta: string
  ctaHref: string
  ctaSource?: string
  ctaStyle: 'outline' | 'gradient'
}

const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Per piccoli saloni, barbieri e centri estetici che iniziano con le prenotazioni online.',
    monthlyPrice: '€29/mese',
    annualPrice: '€290/anno',
    annualMonthly: '€24,17/mese',
    highlighted: false,
    badge: null,
    hasSetup: true,
    features: [
      'Fino a 100 prenotazioni/mese',
      '1 utente incluso',
      'Agenda online',
      'Link prenotazione personalizzato',
      'Clienti e storico base',
      'Promemoria email automatici',
      'Tracking canali base',
      'Pagina prenotazioni personalizzata',
    ],
    cta: 'Inizia la prova gratis',
    ctaHref: LINKS.trial,
    ctaSource: 'pricing-starter',
    ctaStyle: 'outline',
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'Per attività che vogliono gestire agenda, operatori, clienti e marketing in modo più professionale.',
    monthlyPrice: '€69/mese',
    annualPrice: '€690/anno',
    annualMonthly: '€57,50/mese',
    highlighted: true,
    badge: 'Più scelto',
    hasSetup: true,
    features: [
      'Prenotazioni online illimitate',
      '3 utenti/professionisti inclusi',
      'Agenda avanzata con operatori',
      'Servizi assegnati per operatore',
      'Disponibilità per operatore',
      'Schede clienti avanzate',
      'Scheda beauty per centri estetici',
      'Scheda capelli per parrucchieri',
      'Storico clienti e appuntamenti',
      'Promemoria automatici avanzati',
      'Tracking completo dei canali',
      'Link tracciati per Instagram, Google, WhatsApp, QR e sito',
      'Dashboard statistiche',
      'Google Calendar sync',
      'Export CSV/JSON',
      'Email marketing e automazioni',
      'Deposito anti no-show',
      'Lista d\'attesa',
    ],
    cta: 'Inizia la prova gratis',
    ctaHref: LINKS.trial,
    ctaSource: 'pricing-professional',
    ctaStyle: 'gradient',
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'Per strutture ad alto volume, team grandi o configurazioni personalizzate.',
    monthlyPrice: 'Da €149/mese',
    annualPrice: 'Da €1.490/anno',
    annualMonthly: 'Da €124/mese',
    highlighted: false,
    badge: null,
    hasSetup: false,
    features: [
      'Tutto il piano Professional',
      'Utenti illimitati',
      'Prenotazioni online illimitate',
      'Notifiche WhatsApp',
      'Team e configurazioni avanzate',
      'Supporto prioritario',
      'Setup guidato incluso',
      'Report ed export avanzati',
      'Configurazioni personalizzate',
      'Più sedi o più attività (su richiesta)',
      'Integrazioni personalizzate (su richiesta)',
    ],
    cta: 'Richiedi informazioni',
    ctaHref: '/contatti',
    ctaStyle: 'outline',
  },
]

interface PricingCardsProps {
  showNote?: boolean
  showToggle?: boolean
}

export const PricingCards = ({ showNote = true, showToggle = true }: PricingCardsProps) => {
  const [billing, setBilling] = useState<BillingCycle>('monthly')

  return (
    <section className="section-padding" style={{ background: '#050816' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Scegli il piano giusto{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              per la tua attività
            </span>
          </h2>
        </motion.div>

        {/* Badge trial */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-8"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
            }}
          >
            <Check size={14} style={{ color: '#22C55E' }} />
            <span className="text-sm font-medium" style={{ color: '#22C55E' }}>
              30 giorni di prova gratuita su tutti i piani. Nessuna carta di credito richiesta.
            </span>
          </div>
        </motion.div>

        {/* Toggle mensile / annuale */}
        {showToggle && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-14"
          >
            <span
              className="text-sm font-medium"
              style={{ color: billing === 'monthly' ? '#fff' : '#A1A1AA' }}
            >
              Mensile
            </span>
            <button
              onClick={() => setBilling(billing === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none"
              style={{
                background:
                  billing === 'annual'
                    ? 'linear-gradient(135deg, #6C63FF, #00D4FF)'
                    : 'rgba(255,255,255,0.15)',
              }}
              aria-label="Cambia ciclo di fatturazione"
            >
              <span
                className="absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300"
                style={{
                  left: billing === 'annual' ? '30px' : '4px',
                }}
              />
            </button>
            <span
              className="text-sm font-medium"
              style={{ color: billing === 'annual' ? '#fff' : '#A1A1AA' }}
            >
              Annuale
              <span
                className="ml-1 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap"
                style={{
                  background: 'rgba(245, 158, 11, 0.15)',
                  color: '#F59E0B',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                }}
              >
                Risparmi fino al 17%
              </span>
            </span>
          </motion.div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl flex flex-col"
              style={{
                background: plan.highlighted
                  ? 'rgba(108, 99, 255, 0.08)'
                  : 'rgba(255, 255, 255, 0.04)',
                border: plan.highlighted
                  ? '1px solid rgba(108, 99, 255, 0.5)'
                  : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: plan.highlighted
                  ? '0 0 40px rgba(108, 99, 255, 0.15), 0 20px 40px rgba(0,0,0,0.2)'
                  : 'none',
                marginTop: plan.highlighted ? '0' : '0',
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap flex items-center gap-1.5"
                  style={{
                    background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                    color: 'white',
                  }}
                >
                  <Zap size={10} />
                  {plan.badge}
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Header piano */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>
                    {plan.tagline}
                  </p>
                </div>

                {/* Prezzo */}
                <div className="mb-2">
                  <p
                    className="text-3xl font-black mb-1"
                    style={{
                      background: plan.highlighted
                        ? 'linear-gradient(135deg, #6C63FF, #00D4FF)'
                        : 'none',
                      WebkitBackgroundClip: plan.highlighted ? 'text' : 'unset',
                      WebkitTextFillColor: plan.highlighted ? 'transparent' : 'white',
                      backgroundClip: plan.highlighted ? 'text' : 'unset',
                      color: plan.highlighted ? 'transparent' : 'white',
                    }}
                  >
                    {billing === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  </p>
                  {billing === 'annual' && (
                    <p className="text-xs" style={{ color: '#22C55E' }}>
                      equivale a {plan.annualMonthly}
                    </p>
                  )}
                </div>

                {/* Setup fee */}
                {plan.hasSetup && (
                  <p className="text-xs mb-6" style={{ color: '#A1A1AA' }}>
                    + €49 setup iniziale una tantum
                  </p>
                )}
                {!plan.hasSetup && <div className="mb-6" />}

                {/* Features list */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={14}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: plan.highlighted ? '#6C63FF' : '#22C55E' }}
                      />
                      <span className="text-sm" style={{ color: '#A1A1AA' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {plan.ctaStyle === 'gradient' ? (
                  plan.ctaSource ? (
                    <TrialLink
                      source={plan.ctaSource}
                      className="block text-center py-4 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                        boxShadow: '0 4px 20px rgba(108, 99, 255, 0.4)',
                      }}
                    >
                      {plan.cta}
                    </TrialLink>
                  ) : (
                    <Link
                      href={plan.ctaHref}
                      className="block text-center py-4 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                        boxShadow: '0 4px 20px rgba(108, 99, 255, 0.4)',
                      }}
                    >
                      {plan.cta}
                    </Link>
                  )
                ) : plan.ctaSource ? (
                  <TrialLink
                    source={plan.ctaSource}
                    className="block text-center py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:border-white/40"
                    style={{
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: 'white',
                      background: 'transparent',
                    }}
                  >
                    {plan.cta}
                  </TrialLink>
                ) : (
                  <Link
                    href={plan.ctaHref}
                    className="block text-center py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:border-white/40"
                    style={{
                      border: '1px solid rgba(255,255,255,0.2)',
                      color: 'white',
                      background: 'transparent',
                    }}
                  >
                    {plan.cta}
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nota prezzi */}
        {showNote && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <div
              className="rounded-xl p-5 text-sm text-center"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#A1A1AA',
              }}
            >
              <p className="mb-1">
                <strong style={{ color: '#fff' }}>Prezzi IVA esclusa.</strong>{' '}
                Il setup iniziale di €49 (una tantum) è richiesto sui piani Starter e Professional e
                include configurazione guidata, pagina prenotazioni, primi servizi/trattamenti, link
                principali e supporto iniziale.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
