'use client'

// components/FAQ.tsx
// Accordion FAQ con Framer Motion animate height

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { FAQ_ITEMS, FAQItem } from '@/lib/constants'

interface FAQProps {
  items?: FAQItem[]
  limit?: number
  title?: string
}

export const FAQ = ({
  items,
  limit,
  title = 'Domande frequenti',
}: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const faqItems = (items || FAQ_ITEMS).slice(0, limit)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding" style={{ background: '#050816' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {title}
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl overflow-hidden"
                style={{
                  background: isOpen
                    ? 'rgba(108, 99, 255, 0.08)'
                    : 'rgba(255, 255, 255, 0.04)',
                  border: isOpen
                    ? '1px solid rgba(108, 99, 255, 0.3)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
              >
                {/* Trigger */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-white leading-snug">
                    {item.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{
                      background: isOpen
                        ? 'rgba(108, 99, 255, 0.2)'
                        : 'rgba(255, 255, 255, 0.08)',
                      color: isOpen ? '#6C63FF' : '#A1A1AA',
                    }}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                {/* Content con AnimatePresence */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-6 pb-5">
                        <div
                          className="w-full h-px mb-4"
                          style={{ background: 'rgba(255,255,255,0.08)' }}
                        />
                        <p className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
