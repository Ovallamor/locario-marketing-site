'use client'

// components/Header.tsx
// Header sticky con navigazione desktop/mobile, dropdown settori e hide-on-scroll

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { LINKS, NAV_ITEMS, INDUSTRY_NAV } from '@/lib/constants'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const lastScrollY = useRef(0)
  const { scrollY } = useScroll()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Gestisci scroll: background blur + hide on scroll down
  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = lastScrollY.current

    setIsScrolled(current > 20)

    // Nascondi header quando si scrolla verso il basso (oltre 100px)
    if (current > 100) {
      setIsHidden(current > previous && current > 200)
    } else {
      setIsHidden(false)
    }

    lastScrollY.current = current
  })

  // Chiudi dropdown al click fuori
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Blocca scroll body quando menu mobile aperto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <motion.header
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-40"
      >
        <div
          className="transition-all duration-300"
          style={{
            background: isScrolled
              ? 'rgba(5, 8, 22, 0.85)'
              : 'transparent',
            backdropFilter: isScrolled ? 'blur(16px)' : 'none',
            WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
            borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <span
                  className="text-2xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Locario
                </span>
              </Link>

              {/* Nav desktop */}
              <nav className="hidden lg:flex items-center gap-1" aria-label="Navigazione principale">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-150 rounded-lg hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Dropdown Settori */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-150 rounded-lg hover:bg-white/5"
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                  >
                    Settori
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-64 rounded-xl overflow-hidden"
                        style={{
                          background: 'rgba(11, 16, 32, 0.95)',
                          backdropFilter: 'blur(16px)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                        }}
                      >
                        {INDUSTRY_NAV.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsDropdownOpen(false)}
                            className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-150"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>

              {/* CTA desktop */}
              <div className="hidden lg:flex items-center gap-3">
                <Link
                  href={LINKS.login}
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white border border-white/20 rounded-lg hover:border-white/40 transition-all duration-150"
                >
                  Login
                </Link>
                <Link
                  href={LINKS.trial}
                  className="px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                    boxShadow: '0 4px 16px rgba(108, 99, 255, 0.3)',
                  }}
                >
                  Prova gratis
                </Link>
              </div>

              {/* Hamburger mobile */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex items-center justify-center rounded-xl text-white transition-colors"
                style={{
                  width: 48,
                  height: 48,
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  flexShrink: 0,
                }}
                aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Menu mobile fullscreen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-30 flex flex-col"
            style={{ background: '#050816' }}
          >
            {/* Header del menu mobile */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
              <span
                className="text-2xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Locario
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg text-white/80 hover:text-white"
                aria-label="Chiudi menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Link navigazione mobile */}
            <nav className="flex-1 overflow-y-auto px-4 py-8" aria-label="Menu mobile">
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-4 text-lg font-medium text-white/80 hover:text-white border-b border-white/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Settori nel mobile */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_ITEMS.length * 0.05 + 0.1 }}
                >
                  <p className="px-4 pt-6 pb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                    Settori
                  </p>
                  {INDUSTRY_NAV.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 text-base text-white/70 hover:text-white border-b border-white/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              </div>
            </nav>

            {/* CTA mobile */}
            <div className="px-4 pb-8 pt-4 border-t border-white/10 flex flex-col gap-3">
              <Link
                href={LINKS.trial}
                onClick={() => setIsMenuOpen(false)}
                className="block text-center py-4 text-base font-semibold text-white rounded-xl"
                style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)' }}
              >
                Prova gratis 14 giorni
              </Link>
              <Link
                href={LINKS.login}
                onClick={() => setIsMenuOpen(false)}
                className="block text-center py-3 text-sm font-medium text-white/70 border border-white/20 rounded-xl hover:text-white transition-colors"
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
