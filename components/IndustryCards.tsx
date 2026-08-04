'use client'

// components/IndustryCards.tsx
// cards settore con pain points, soluzioni e hover expand

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { UtensilsCrossed, Scissors, Sparkles, Briefcase, Coffee, Stethoscope, BedDouble, ArrowRight, X, Check } from 'lucide-react'
import Link from 'next/link'
import { INDUSTRIES } from '@/lib/constants'

const iconMap: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed size={28} />,
  Scissors: <Scissors size={28} />,
  Sparkles: <Sparkles size={28} />,
  Briefcase: <Briefcase size={28} />,
  Coffee: <Coffee size={28} />,
  Stethoscope: <Stethoscope size={28} />,
  BedDouble: <BedDouble size={28} />,
}

export const IndustryCards = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section
      className="section-padding"
      style={{ background: '#0B1020' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Locario funziona per{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              la tua attività
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#A1A1AA' }}>
            Che tu gestisca un ristorante, un salone, un centro estetico o uno studio professionale,
            Locario si adatta alla tua realtà.
          </p>
        </motion.div>

        {/* Grid settori */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map((industry, i) => {
            const isExpanded = expandedId === industry.id

            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: isExpanded
                    ? `1px solid ${industry.color}50`
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'border-color 0.2s',
                }}
                onClick={() => setExpandedId(isExpanded ? null : industry.id)}
              >
                {/* Gradient top bar */}
                <div
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(90deg, ${industry.color}, transparent)` }}
                />

                <div className="p-6">
                  {/* Icona */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-105"
                    style={{
                      background: `${industry.color}15`,
                      color: industry.color,
                    }}
                  >
                    {iconMap[industry.icon]}
                  </div>

                  {/* Titolo */}
                  <h3 className="text-lg font-bold text-white mb-2">{industry.title}</h3>
                  <p className="text-sm mb-4" style={{ color: '#A1A1AA' }}>
                    {industry.subtitle}
                  </p>

                  {/* Pain points sempre visibili */}
                  <ul className="space-y-2 mb-5">
                    {industry.painPoints.slice(0, 2).map((pain, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <X
                          size={12}
                          className="flex-shrink-0 mt-1"
                          style={{ color: '#EF4444' }}
                        />
                        <span className="text-xs leading-relaxed" style={{ color: '#A1A1AA' }}>
                          {pain}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Contenuto expandable */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        {/* Altri pain points */}
                        <ul className="space-y-2 mb-4">
                          {industry.painPoints.slice(2).map((pain, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <X
                                size={12}
                                className="flex-shrink-0 mt-1"
                                style={{ color: '#EF4444' }}
                              />
                              <span className="text-xs leading-relaxed" style={{ color: '#A1A1AA' }}>
                                {pain}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Soluzione */}
                        <div
                          className="rounded-xl p-4 mb-5"
                          style={{
                            background: `${industry.color}08`,
                            border: `1px solid ${industry.color}20`,
                          }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Check size={14} style={{ color: industry.color }} />
                            <p className="text-xs font-semibold" style={{ color: industry.color }}>
                              La soluzione
                            </p>
                          </div>
                          <p className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>
                            {industry.solution}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Footer card */}
                  <div className="flex items-center justify-between">
                    <button
                      className="text-xs font-medium transition-colors"
                      style={{ color: industry.color }}
                    >
                      {isExpanded ? 'Meno info' : 'Scopri di più'}
                    </button>

                    <Link
                      href={industry.href}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-150 hover:-translate-x-0 hover:gap-2"
                      style={{ color: industry.color }}
                      aria-label={`Scopri Locario per ${industry.title}`}
                    >
                      Approfondisci
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
