// components/TrialLink.tsx
// Link "Prova gratis" che porta con sé l'attribuzione: inoltra eventuali utm_*
// già presenti nell'URL della pagina corrente (traffico ads già taggato) e
// aggiunge utm_content=<source> per sapere quale CTA/pagina ha convertito.
// Spara anche l'evento GA4 trial_cta_click al click.
'use client'

import { useEffect, useState, type AnchorHTMLAttributes, type ReactNode } from 'react'
import { LINKS } from '@/lib/constants'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const FORWARDED_UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const

function buildTrialHref(source: string): string {
  if (typeof window === 'undefined') return LINKS.trial
  const incoming = new URLSearchParams(window.location.search)
  const params = new URLSearchParams()
  for (const key of FORWARDED_UTM_KEYS) {
    const value = incoming.get(key)
    if (value) params.set(key, value)
  }
  if (!params.get('utm_content')) params.set('utm_content', source)
  if (!params.get('utm_source')) params.set('utm_source', 'locario_site')
  if (!params.get('utm_medium')) params.set('utm_medium', 'referral')
  return `${LINKS.trial}?${params.toString()}`
}

interface TrialLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  source: string
  children: ReactNode
}

export function TrialLink({ source, children, onClick, ...rest }: TrialLinkProps) {
  // SSR-safe default (nessun utm noto lato server), arricchito dopo il mount
  const [href, setHref] = useState<string>(LINKS.trial)

  useEffect(() => {
    setHref(buildTrialHref(source))
  }, [source])

  return (
    <a
      href={href}
      onClick={(e) => {
        window.gtag?.('event', 'trial_cta_click', { cta_location: source })
        onClick?.(e)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
