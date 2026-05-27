// components/Footer.tsx
// Footer con 4 colonne di link, logo, tagline e copyright

import Link from 'next/link'
import { LINKS } from '@/lib/constants'

const footerColumns = [
  {
    title: 'Prodotto',
    links: [
      { href: '/funzionalita', label: 'Funzionalità' },
      { href: '/prezzi', label: 'Prezzi' },
      { href: '/come-funziona', label: 'Come Funziona' },
      { href: '/prenotazioni-online', label: 'Prenotazioni Online' },
      { href: '/tracciamento-prenotazioni', label: 'Tracciamento Canali' },
      { href: '/gestione-clienti', label: 'Gestione Clienti' },
    ],
  },
  {
    title: 'Settori',
    links: [
      { href: '/gestionale-prenotazioni-ristorante', label: 'Ristoranti' },
      { href: '/gestionale-prenotazioni-pizzeria', label: 'Pizzerie' },
      { href: '/gestionale-prenotazioni-parrucchieri', label: 'Parrucchieri' },
      { href: '/gestionale-prenotazioni-centro-estetico', label: 'Centri Estetici' },
    ],
  },
  {
    title: 'Azienda',
    links: [
      { href: '/contatti', label: 'Contatti' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/termini', label: 'Termini di Servizio' },
    ],
  },
  {
    title: 'Inizia',
    links: [
      { href: LINKS.trial, label: 'Prova gratis 14 giorni', external: true },
      { href: LINKS.login, label: 'Login', external: true },
      { href: LINKS.register, label: 'Registrati', external: true },
    ],
  },
]

export const Footer = () => {
  return (
    <footer
      style={{
        background: '#050816',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Grid principale */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-block mb-4">
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
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#A1A1AA' }}>
              Il gestionale delle prenotazioni che ti mostra da dove arrivano davvero i tuoi clienti.
            </p>
            <div className="mt-4">
              <a
                href={`mailto:${LINKS.email}`}
                className="text-sm transition-colors duration-150 hover:text-white"
                style={{ color: '#A1A1AA' }}
              >
                {LINKS.email}
              </a>
            </div>
          </div>

          {/* Colonne link */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        className="text-sm transition-colors duration-150 hover:text-white"
                        style={{ color: '#A1A1AA' }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm transition-colors duration-150 hover:text-white"
                        style={{ color: '#A1A1AA' }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm" style={{ color: '#A1A1AA' }}>
              &copy; 2024 Locario. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm transition-colors duration-150 hover:text-white"
                style={{ color: '#A1A1AA' }}
              >
                Privacy
              </Link>
              <Link
                href="/termini"
                className="text-sm transition-colors duration-150 hover:text-white"
                style={{ color: '#A1A1AA' }}
              >
                Termini
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
