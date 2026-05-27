'use client'

// components/TrialCTA.tsx
// Sezione CTA finale con gradiente, sfere animate e trust badges

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { LINKS } from '@/lib/constants'

const trustBadges = ['Nessun obbligo', 'Setup in 5 minuti', 'Assistenza inclusa']

// Sfere decorative
const spheres = [
  { size: 300, top: '-30%', left: '-5%', color: 'rgba(108, 99, 255, 0.18)', duration: 8 },
  { size: 250, bottom: '-20%', right: '-5%', color: 'rgba(0, 212, 255, 0.12)', duration: 10 },
  { size: 180, top: '40%', left: '30%', color: 'rgba(108, 99, 255, 0.08)', duration: 7 },
]

export const TrialCTA = () => {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0D0B24 0%, #050816 50%, #061020 100%)',
      }}
    >
      {/* Sfere animate */}
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
            filter: 'blur(50px)',
            animation: `float ${sphere.duration}s ease-in-out infinite`,
            animationDelay: `${i * 1.2}s`,
          }}
        />
      ))}

      {/* Contenuto */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: 'rgba(108, 99, 255, 0.15)',
              border: '1px solid rgba(108, 99, 255, 0.3)',
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#6C63FF' }}>
              Inizia oggi
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Porta ordine nella tua attività.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Inizia gratis, senza rischi.
            </span>
          </h2>

          {/* Sottotitolo */}
          <p className="text-lg mb-10 max-w-lg mx-auto" style={{ color: '#A1A1AA' }}>
            14 giorni di prova gratuita. Nessuna carta di credito richiesta. Cancella quando vuoi.
          </p>

          {/* CTA principale */}
          <Link
            href={LINKS.trial}
            className="inline-flex items-center gap-3 px-8 py-5 text-lg font-bold text-white rounded-2xl transition-all duration-200 hover:-translate-y-1 mb-8"
            style={{
              background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
              boxShadow: '0 8px 40px rgba(108, 99, 255, 0.5)',
            }}
          >
            Prova Locario gratis per 14 giorni
            <ArrowRight size={20} />
          </Link>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(34, 197, 94, 0.2)' }}
                >
                  <Check size={10} style={{ color: '#22C55E' }} />
                </div>
                <span className="text-sm font-medium" style={{ color: '#A1A1AA' }}>
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
