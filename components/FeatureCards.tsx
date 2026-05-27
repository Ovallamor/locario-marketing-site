'use client'

// components/FeatureCards.tsx
// Grid 8 cards funzionalità con glassmorphism e hover glow

import { motion } from 'framer-motion'
import {
  Calendar,
  LayoutDashboard,
  BarChart3,
  Users,
  Bell,
  TrendingUp,
  Link,
  Building2,
} from 'lucide-react'
import { FEATURES } from '@/lib/constants'

const iconMap: Record<string, React.ReactNode> = {
  Calendar: <Calendar size={24} />,
  LayoutDashboard: <LayoutDashboard size={24} />,
  BarChart3: <BarChart3 size={24} />,
  Users: <Users size={24} />,
  Bell: <Bell size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  Link: <Link size={24} />,
  Building2: <Building2 size={24} />,
}

interface FeatureCardsProps {
  limit?: number
  showHeader?: boolean
}

export const FeatureCards = ({ limit, showHeader = true }: FeatureCardsProps) => {
  const features = limit ? FEATURES.slice(0, limit) : FEATURES

  return (
    <section className="section-padding" style={{ background: '#050816' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Tutto quello che serve per gestire{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                prenotazioni, clienti e canali
              </span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#A1A1AA' }}>
              Un sistema pensato per chi lavora davvero, non per chi ha tempo di imparare software
              complicati.
            </p>
          </motion.div>
        )}

        {/* Grid 4 col desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative rounded-2xl p-6 transition-all duration-200 cursor-default"
              style={{
                background: feature.highlighted
                  ? 'rgba(108, 99, 255, 0.1)'
                  : 'rgba(255, 255, 255, 0.05)',
                border: feature.highlighted
                  ? '1px solid rgba(108, 99, 255, 0.4)'
                  : '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Highlighted badge */}
              {feature.highlighted && (
                <div
                  className="absolute -top-3 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                    color: 'white',
                  }}
                >
                  Unico
                </div>
              )}

              {/* Glow hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: '0 0 30px rgba(108, 99, 255, 0.12)',
                  border: '1px solid rgba(108, 99, 255, 0.25)',
                }}
              />

              {/* Icona */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110"
                style={{
                  background: feature.highlighted
                    ? 'rgba(108, 99, 255, 0.2)'
                    : 'rgba(255, 255, 255, 0.07)',
                  color: feature.highlighted ? '#6C63FF' : '#A1A1AA',
                }}
              >
                {iconMap[feature.icon]}
              </div>

              {/* Titolo */}
              <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>

              {/* Descrizione */}
              <p className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
