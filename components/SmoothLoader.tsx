'use client'

// components/SmoothLoader.tsx
// Loader animato al caricamento della pagina con logo Locario

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const SmoothLoader = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Rimuove il loader dopo 1.5 secondi
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: '#050816' }}
          aria-hidden="true"
        >
          {/* Sfondo con gradiente radiale */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(108, 99, 255, 0.15), transparent)',
            }}
          />

          {/* Logo animato */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative flex flex-col items-center gap-4"
          >
            {/* Logo text */}
            <motion.div
              className="text-4xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Locario
            </motion.div>

            {/* Barra di caricamento */}
            <div className="w-32 h-0.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity }}
                className="h-full w-full rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
