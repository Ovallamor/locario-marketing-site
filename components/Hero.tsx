'use client'

// components/Hero.tsx
// Hero section principale: full viewport, sfere floating, mockup 3D, badge canali animati

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { LINKS } from '@/lib/constants'
import { ProductMockup3D } from './ProductMockup3D'

// Badge canali fluttuanti attorno al mockup
const channelBadges = [
  { label: 'Google', color: '#4285F4', delay: 0, top: '5%', left: '-8%' },
  { label: 'Instagram', color: '#E1306C', delay: 0.5, top: '20%', right: '-10%' },
  { label: 'WhatsApp', color: '#25D366', delay: 1, bottom: '30%', left: '-12%' },
  { label: 'QR Code', color: '#6C63FF', delay: 1.5, bottom: '10%', right: '-8%' },
  { label: 'Sito Web', color: '#00D4FF', delay: 0.8, top: '55%', left: '-14%' },
  { label: 'Telefono', color: '#F59E0B', delay: 1.2, top: '42%', right: '-12%' },
]

// Sfere decorative floating
const spheres = [
  { size: 400, top: '-10%', left: '-10%', color: 'rgba(108, 99, 255, 0.12)', duration: 8 },
  { size: 300, top: '50%', right: '-5%', color: 'rgba(0, 212, 255, 0.08)', duration: 10 },
  { size: 200, bottom: '10%', left: '20%', color: 'rgba(34, 197, 94, 0.06)', duration: 7 },
  { size: 250, top: '20%', right: '20%', color: 'rgba(108, 99, 255, 0.07)', duration: 12 },
  { size: 180, bottom: '30%', right: '30%', color: 'rgba(0, 212, 255, 0.05)', duration: 9 },
]

export const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-start lg:items-center overflow-x-hidden pt-20"
      style={{ background: '#050816' }}
    >
      {/* Gradiente radiale centrale */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(108, 99, 255, 0.12), transparent 70%)',
        }}
      />

      {/* Sfere floating decorative */}
      {spheres.map((sphere, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: sphere.size,
            height: sphere.size,
            top: sphere.top,
            left: sphere.left,
            right: sphere.right,
            bottom: sphere.bottom,
            background: sphere.color,
            filter: 'blur(60px)',
            animation: `float ${sphere.duration}s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}

      {/* Contenuto principale */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full py-8 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center w-full min-w-0">
          {/* Colonna sinistra: copy */}
          <div className="min-w-0 w-full">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: 'rgba(108, 99, 255, 0.12)',
                border: '1px solid rgba(108, 99, 255, 0.3)',
              }}
            >
              <span style={{ color: '#6C63FF' }}>&#10022;</span>
              <span className="text-sm font-medium" style={{ color: '#A1A1AA' }}>
                Gestionale prenotazioni per attività locali
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
            >
              Il gestionale prenotazioni che ti mostra{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                da dove arrivano davvero
              </span>{' '}
              i clienti
            </motion.h1>

            {/* Sottotitolo */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: '#A1A1AA' }}
            >
              Con Locario gestisci prenotazioni, clienti e richieste da Google, sito, social e campagne
              in un unico sistema. Provalo gratis per 14 giorni e porta ordine nella tua attività.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                href={LINKS.trial}
                className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold text-white rounded-xl transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                  boxShadow: '0 8px 32px rgba(108, 99, 255, 0.4)',
                }}
              >
                Prova gratis 14 giorni
                <ArrowRight size={18} />
              </Link>
              <Link
                href={LINKS.login}
                className="inline-flex items-center gap-2 px-7 py-4 text-base font-medium text-white rounded-xl transition-all duration-200"
                style={{
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.05)',
                }}
              >
                Login
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap items-center gap-6"
            >
              {['Nessuna carta richiesta', 'Setup in 5 minuti', '14 giorni gratis'].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <Check size={14} style={{ color: '#22C55E' }} />
                  <span className="text-sm" style={{ color: '#A1A1AA' }}>
                    {badge}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Colonna destra: mockup 3D con badge canali */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Badge canali floating */}
            {channelBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                className="absolute z-20 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap pointer-events-none"
                style={{
                  top: badge.top,
                  bottom: badge.bottom,
                  left: badge.left,
                  right: badge.right,
                  background: `${badge.color}20`,
                  border: `1px solid ${badge.color}40`,
                  color: badge.color,
                  animation: `float ${5 + i * 0.7}s ease-in-out infinite`,
                  animationDelay: `${badge.delay}s`,
                }}
              >
                {badge.label}
              </motion.div>
            ))}

            {/* Mockup dashboard */}
            <ProductMockup3D />
          </motion.div>

          {/* Mockup mobile — nascosto su mobile piccolo, visibile da sm in su */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden sm:block lg:hidden"
          >
            <ProductMockup3D />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: 'rgba(255,255,255,0.2)' }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.5)' }}
          />
        </div>
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Scorri
        </span>
      </motion.div>
    </section>
  )
}
