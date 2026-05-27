'use client'

// app/page.tsx
// Homepage Locario: tutte le sezioni in sequenza strategica per massima conversione

import { motion } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import { Hero } from '@/components/Hero'
import { HorizontalFeatures } from '@/components/HorizontalFeatures'
import { TrackingSources } from '@/components/TrackingSources'
import { IndustryCards } from '@/components/IndustryCards'
import { FeatureCards } from '@/components/FeatureCards'
import { PricingCards } from '@/components/PricingCards'
import { FAQ } from '@/components/FAQ'
import { TrialCTA } from '@/components/TrialCTA'
import { FAQ_ITEMS } from '@/lib/constants'
import Link from 'next/link'
import { LINKS } from '@/lib/constants'

// Pain points per la sezione problema
const painPoints = [
  {
    icon: '🔀',
    title: 'Caos multicanale',
    desc: 'Prenotazioni su WhatsApp, Google, telefono e Instagram: ognuno con le sue regole e nessuna visione d\'insieme.',
  },
  {
    icon: '📉',
    title: 'Perdita di prenotazioni',
    desc: 'Messaggi dispersi tra chat, chiamate perse e fogli segnati a mano. Alcune richieste finiscono nel vuoto.',
  },
  {
    icon: '❓',
    title: 'Nessun dato utile',
    desc: 'Hai investito su Google, su Instagram e su campagne. Ma non sai quale canale funziona davvero.',
  },
]

// Vantaggi soluzione
const solutionPoints = [
  'Tutte le prenotazioni in un unico sistema, ordinate e tracciate',
  'Sai esattamente da quale canale arriva ogni cliente',
  'Promemoria automatici: zero no-show, zero chiamate inutili',
  'Dashboard chiara: vedi cosa funziona e dove investire',
]

export default function HomePage() {
  const homeFAQ = FAQ_ITEMS.slice(0, 5)

  return (
    <>
      {/* 1. HERO */}
      <Hero />

      {/* 2. SEZIONE PROBLEMA */}
      <section className="section-padding" style={{ background: '#0B1020' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Le prenotazioni arrivano da ovunque.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #EF4444, #F59E0B)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Il controllo no.
              </span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#A1A1AA' }}>
              Ricevi prenotazioni da Google, WhatsApp, Instagram, il sito, il telefono. Ma quante di
              quelle richieste finiscono perse? Quante non sai da dove arrivano? Quante le gestisci
              ancora a mano?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((pain, i) => (
              <motion.div
                key={pain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(239, 68, 68, 0.06)',
                  border: '1px solid rgba(239, 68, 68, 0.15)',
                }}
              >
                <span className="text-3xl mb-4 block">{pain.icon}</span>
                <h3 className="text-lg font-bold text-white mb-3">{pain.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>
                  {pain.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEZIONE SOLUZIONE */}
      <section className="section-padding" style={{ background: '#050816' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                }}
              >
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#22C55E' }}>
                  La soluzione
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Locario riunisce tutto{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  in un unico sistema
                </span>
              </h2>

              <p className="text-lg mb-8 leading-relaxed" style={{ color: '#A1A1AA' }}>
                Con Locario non perdi richieste tra chat, telefonate e fogli segnati a mano. Ogni
                prenotazione arriva ordinata, tracciata e collegata alla sua fonte.
              </p>

              <ul className="space-y-4 mb-8">
                {solutionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(34, 197, 94, 0.2)' }}
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M1 4L3.5 6.5L9 1"
                          stroke="#22C55E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: '#A1A1AA' }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={LINKS.trial}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                  boxShadow: '0 4px 16px rgba(108, 99, 255, 0.3)',
                }}
              >
                Inizia gratis
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Visual right */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              {/* Card statistiche simulate */}
              <div className="space-y-4">
                {[
                  { label: 'Prenotazioni perse', before: '~20%', after: '~2%', positive: false },
                  { label: 'Canali tracciati', before: '0', after: '11', positive: true },
                  { label: 'Tempo gestione', before: '45 min/giorno', after: '10 min/giorno', positive: true },
                  { label: 'No-show', before: '15%', after: '4%', positive: false },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between rounded-xl px-5 py-4"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <span className="text-sm font-medium text-white">{stat.label}</span>
                    <div className="flex items-center gap-3">
                      <span
                        className="text-sm line-through"
                        style={{ color: 'rgba(239, 68, 68, 0.7)' }}
                      >
                        {stat.before}
                      </span>
                      <ArrowRight size={12} style={{ color: '#A1A1AA' }} />
                      <span
                        className="text-sm font-bold"
                        style={{ color: stat.positive ? '#22C55E' : '#22C55E' }}
                      >
                        {stat.after}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. HORIZONTAL FEATURES */}
      <HorizontalFeatures />

      {/* 5. TRACKING SOURCES - differenziatore chiave */}
      <TrackingSources />

      {/* 6. INDUSTRY CARDS */}
      <IndustryCards />

      {/* 7. FEATURE CARDS */}
      <FeatureCards />

      {/* 8. PRICING (sintetico) */}
      <PricingCards />

      {/* 9. FAQ (5 domande) */}
      <FAQ items={homeFAQ} limit={5} />

      {/* 10. TRIAL CTA */}
      <TrialCTA />
    </>
  )
}
