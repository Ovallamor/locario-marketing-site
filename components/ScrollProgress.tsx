'use client'

// components/ScrollProgress.tsx
// Barra di progresso scroll fissa in cima al viewport

import { useScroll, useTransform, motion } from 'framer-motion'

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()

  // Trasforma il progresso scroll (0-1) in una percentuale di larghezza
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-[3px] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #6C63FF, #00D4FF)',
      }}
      aria-hidden="true"
    />
  )
}
