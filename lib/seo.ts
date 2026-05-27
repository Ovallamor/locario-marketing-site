// lib/seo.ts
// Helper per generare metadata SEO consistenti su tutte le pagine di Locario

import { Metadata } from 'next'
import { LINKS } from './constants'

interface GenerateMetadataOptions {
  title: string
  description: string
  path?: string
  keywords?: string[]
  noIndex?: boolean
}

/**
 * Genera metadata Next.js complete con OpenGraph, Twitter Card e canonical.
 * Usa il template title standard di Locario.
 */
export function generateMetadata({
  title,
  description,
  path = '',
  keywords = [],
  noIndex = false,
}: GenerateMetadataOptions): Metadata {
  const canonical = `${LINKS.siteUrl}${path}`
  const ogImage = `${LINKS.siteUrl}/og-image.jpg`

  const defaultKeywords = [
    'gestionale prenotazioni',
    'prenotazioni online',
    'software prenotazioni attività locali',
    'tracking canali acquisizione',
    'agenda online',
    'Locario',
  ]

  return {
    title: {
      default: title,
      template: `%s | Locario`,
    },
    description,
    keywords: [...defaultKeywords, ...keywords].join(', '),
    authors: [{ name: 'Locario', url: LINKS.siteUrl }],
    creator: 'Locario',
    publisher: 'Locario',
    metadataBase: new URL(LINKS.siteUrl),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Locario',
      locale: 'it_IT',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  }
}

// ===================================
// JSON-LD SCHEMAS
// ===================================

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Locario',
  url: LINKS.siteUrl,
  email: LINKS.email,
  description: 'Gestionale delle prenotazioni online per attività locali con tracking dei canali di acquisizione',
  logo: {
    '@type': 'ImageObject',
    url: `${LINKS.siteUrl}/logo.png`,
  },
}

export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Locario',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'Gestionale delle prenotazioni per attività locali con tracking dei canali di acquisizione. Ristoranti, parrucchieri, centri estetici e studi professionali.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    description: '14 giorni di prova gratuita. Nessuna carta di credito richiesta.',
  },
  url: LINKS.login,
  screenshot: `${LINKS.siteUrl}/screenshot.jpg`,
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Locario',
  url: LINKS.siteUrl,
  description: 'Gestionale delle prenotazioni per attività locali',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${LINKS.siteUrl}/?s={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}
