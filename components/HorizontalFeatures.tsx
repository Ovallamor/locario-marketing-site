'use client'

// components/HorizontalFeatures.tsx
// Sezione con scroll orizzontale snap + cards funzionalità dettagliate

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Calendar, BarChart3, Users, Bell, Link, ChevronLeft, ChevronRight } from 'lucide-react'

const horizontalFeatures = [
  {
    number: '01',
    icon: <Calendar size={40} />,
    title: 'Agenda sempre sotto controllo',
    description:
      'Visualizza tutte le prenotazioni per giorno, settimana o per operatore. Identifica in un secondo i buchi nell\'agenda e i momenti di picco.',
    detail:
      'Niente più agenda cartacea da portare ovunque. Accedi da computer, tablet o smartphone. Condividi l\'agenda con il tuo team in tempo reale.',
    color: '#6C63FF',
  },
  {
    number: '02',
    icon: <BarChart3 size={40} />,
    title: 'Tracking canali che funziona davvero',
    description:
      'Ogni prenotazione porta il timbro del canale da cui arriva. Google, Instagram, WhatsApp, QR code o campagna pubblicitaria: sai sempre la fonte.',
    detail:
      'Non devi fare nulla di speciale: il sistema registra automaticamente ogni fonte. Tu vedi i dati nella dashboard e decidi dove investire.',
    color: '#00D4FF',
  },
  {
    number: '03',
    icon: <Users size={40} />,
    title: 'Gestione clienti con storia',
    description:
      'Ogni cliente ha una scheda con le sue prenotazioni passate, le preferenze, le note e il canale da cui è arrivato la prima volta.',
    detail:
      'Ricorda il compleanno di un cliente abituale. Annota che ha un\'allergia. Vedi quante volte è tornato. Il servizio personalizzato parte da qui.',
    color: '#22C55E',
  },
  {
    number: '04',
    icon: <Bell size={40} />,
    title: 'Promemoria automatici, no-show ridotti',
    description:
      'Il sistema manda un promemoria automatico ai clienti prima dell\'appuntamento. Meno dimenticanze, meno cancellazioni last minute.',
    detail:
      'Configura il promemoria con l\'anticipo che preferisci: 24 ore, 2 ore o entrambi. Il messaggio va automaticamente, tu non devi fare niente.',
    color: '#F59E0B',
  },
  {
    number: '05',
    icon: <Link size={40} />,
    title: 'Un link per ogni canale',
    description:
      'Ogni canale ha il suo link prenotazione univoco. Instagram ha il suo, Google il suo, il sito il suo. Così sai da dove arriva ogni cliente.',
    detail:
      'Metti il link nella bio di Instagram, nel pulsante del sito, nello stato WhatsApp. Ogni clic è tracciato automaticamente senza configurazioni extra.',
    color: '#E1306C',
  },
]

export const HorizontalFeatures = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return
    const card = scrollRef.current.children[index] as HTMLElement
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
      setActiveIndex(index)
    }
  }

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    const cardWidth = scrollWidth / horizontalFeatures.length
    const index = Math.round(scrollLeft / cardWidth)
    setActiveIndex(Math.min(index, horizontalFeatures.length - 1))
  }

  return (
    <section
      className="section-padding overflow-hidden"
      style={{ background: '#050816' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Funzionalità pensate{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                per chi lavora davvero
              </span>
            </h2>
            <p className="text-base max-w-xl" style={{ color: '#A1A1AA' }}>
              Nessuna funzione inutile. Solo quello che serve ogni giorno per gestire la tua attività
              senza stress.
            </p>
          </div>

          {/* Frecce navigazione desktop */}
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150 disabled:opacity-30"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'white',
              }}
              aria-label="Precedente"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollTo(Math.min(horizontalFeatures.length - 1, activeIndex + 1))}
              disabled={activeIndex === horizontalFeatures.length - 1}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150 disabled:opacity-30"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'white',
              }}
              aria-label="Successivo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Scroll orizzontale con snap */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 overflow-x-auto pb-4"
          style={{
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {horizontalFeatures.map((feature, i) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-shrink-0 rounded-2xl p-7 flex flex-col"
              style={{
                minWidth: '340px',
                maxWidth: '380px',
                scrollSnapAlign: 'start',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Numero grande */}
              <p
                className="text-6xl font-black mb-4 leading-none"
                style={{ color: 'rgba(255,255,255,0.06)' }}
              >
                {feature.number}
              </p>

              {/* Icona */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: `${feature.color}15`,
                  color: feature.color,
                }}
              >
                {feature.icon}
              </div>

              {/* Titolo */}
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>

              {/* Descrizione principale */}
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#A1A1AA' }}>
                {feature.description}
              </p>

              {/* Dettaglio aggiuntivo */}
              <div
                className="mt-auto pt-4 border-t"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <p className="text-xs leading-relaxed" style={{ color: '#A1A1AA' }}>
                  {feature.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {horizontalFeatures.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className="transition-all duration-200 rounded-full"
              style={{
                width: i === activeIndex ? '20px' : '8px',
                height: '8px',
                background:
                  i === activeIndex
                    ? 'linear-gradient(135deg, #6C63FF, #00D4FF)'
                    : 'rgba(255,255,255,0.2)',
              }}
              aria-label={`Vai alla slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
