'use client'

// components/ProductMockup3D.tsx
// Dashboard mockup con effetto 3D tilt su mouse move via Framer Motion

import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

const bookings = [
  {
    name: 'Marco Rossi',
    service: 'Cena per 2',
    time: '20:00',
    channel: 'Google',
    channelColor: '#4285F4',
  },
  {
    name: 'Giulia Bianchi',
    service: 'Taglio + Piega',
    time: '15:30',
    channel: 'Instagram',
    channelColor: '#E1306C',
  },
  {
    name: 'Luca Ferrari',
    service: 'Trattamento Viso',
    time: '11:00',
    channel: 'Sito Web',
    channelColor: '#00D4FF',
  },
  {
    name: 'Sofia Marino',
    service: 'Pranzo aziendale',
    time: '13:00',
    channel: 'QR Code',
    channelColor: '#6C63FF',
  },
]

const channelBars = [
  { label: 'Google', value: 42, color: '#4285F4' },
  { label: 'Instagram', value: 28, color: '#E1306C' },
  { label: 'Sito', value: 18, color: '#00D4FF' },
  { label: 'QR', value: 12, color: '#6C63FF' },
]

export const ProductMockup3D = () => {
  const cardRef = useRef<HTMLDivElement>(null)

  // Motion values per il tilt
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Tilt con spring physics per movimento fluido
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [12, -12]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-12, 12]), {
    stiffness: 300,
    damping: 30,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    // perspective container - su mobile non c'e' tilt (pointer-events none)
    <div style={{ perspective: '1000px' }} className="w-full max-w-lg mx-auto">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        // Su mobile rotazione disabilitata
        style={{
          rotateX: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : rotateX,
          rotateY: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative rounded-2xl overflow-hidden"
      >
        {/* Glow border */}
        <div
          className="absolute inset-0 rounded-2xl z-0"
          style={{
            background: 'linear-gradient(135deg, rgba(108,99,255,0.4), rgba(0,212,255,0.4))',
            padding: '1px',
          }}
        >
          <div className="w-full h-full rounded-2xl" style={{ background: '#0B1020' }} />
        </div>

        {/* Card content */}
        <div
          className="relative z-10 rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(11, 16, 32, 0.95)',
            border: '1px solid rgba(108, 99, 255, 0.3)',
            boxShadow: '0 0 60px rgba(108, 99, 255, 0.2), 0 40px 80px rgba(0,0,0,0.5)',
          }}
        >
          {/* Header dashboard */}
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div>
              <p className="text-xs font-medium" style={{ color: '#A1A1AA' }}>
                Dashboard Locario
              </p>
              <p className="text-sm font-semibold text-white">27 Maggio 2026</p>
            </div>
            {/* Status badge */}
            <div
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
              style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22C55E' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Online
            </div>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-3 gap-0"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
          >
            {[
              { label: 'Oggi', value: '12', sub: 'prenotazioni' },
              { label: 'Settimana', value: '67', sub: 'prenotazioni' },
              { label: 'Conferma', value: '94%', sub: 'tasso' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="px-4 py-4 text-center"
                style={{
                  borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}
              >
                <p
                  className="text-xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-xs mt-0.5" style={{ color: '#A1A1AA' }}>
                  {stat.sub}
                </p>
                <p className="text-xs" style={{ color: '#A1A1AA' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Lista prenotazioni */}
          <div className="px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#A1A1AA' }}>
              Prossime prenotazioni
            </p>
            <div className="space-y-2">
              {bookings.map((booking) => (
                <div
                  key={booking.name}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: 'rgba(108, 99, 255, 0.2)', color: '#6C63FF' }}
                    >
                      {booking.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white">{booking.name}</p>
                      <p className="text-xs" style={{ color: '#A1A1AA' }}>
                        {booking.service}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-xs font-mono text-white">{booking.time}</span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: `${booking.channelColor}20`,
                        color: booking.channelColor,
                      }}
                    >
                      {booking.channel}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mini grafico canali */}
          <div
            className="px-4 pb-4 pt-2"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#A1A1AA' }}>
              Prenotazioni per canale
            </p>
            <div className="space-y-2">
              {channelBars.map((bar) => (
                <div key={bar.label} className="flex items-center gap-3">
                  <span className="text-xs w-14 flex-shrink-0" style={{ color: '#A1A1AA' }}>
                    {bar.label}
                  </span>
                  <div
                    className="flex-1 h-1.5 rounded-full overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.08)' }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${bar.value}%`, background: bar.color }}
                    />
                  </div>
                  <span className="text-xs w-8 text-right" style={{ color: '#A1A1AA' }}>
                    {bar.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
