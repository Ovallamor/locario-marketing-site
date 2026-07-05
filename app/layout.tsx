// app/layout.tsx
// Layout radice: font, metadata, schema JSON-LD, provider globali

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SmoothLoader } from '@/components/SmoothLoader'
import { ScrollProgress } from '@/components/ScrollProgress'
import { LINKS } from '@/lib/constants'
import { organizationSchema, softwareApplicationSchema, websiteSchema } from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(LINKS.siteUrl),
  title: {
    default: 'Locario | Gestionale Prenotazioni che Traccia i Canali di Acquisizione',
    template: '%s | Locario',
  },
  description:
    'Locario è il gestionale delle prenotazioni per attività locali che ti mostra da dove arrivano davvero i tuoi clienti. Traccia Google, Instagram, WhatsApp, QR code e campagne in un unico sistema. Prova gratis 14 giorni.',
  keywords:
    'gestionale prenotazioni, prenotazioni online, software prenotazioni ristorante, agenda online parrucchieri, tracking canali acquisizione, prenotazioni centro estetico, gestionale attività locali',
  authors: [{ name: 'Locario', url: LINKS.siteUrl }],
  creator: 'Locario',
  publisher: 'Locario',
  alternates: {
    canonical: LINKS.siteUrl,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: LINKS.siteUrl,
    siteName: 'Locario',
    title: 'Locario | Gestionale Prenotazioni che Traccia i Canali di Acquisizione',
    description:
      'Il gestionale delle prenotazioni per attività locali che ti mostra da dove arrivano davvero i tuoi clienti. Traccia Google, Instagram, WhatsApp, QR code e campagne. Prova gratis 14 giorni.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Locario - Gestionale Prenotazioni',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Locario | Gestionale Prenotazioni che Traccia i Canali di Acquisizione',
    description:
      'Il gestionale delle prenotazioni per attività locali. Scopri da dove arrivano davvero i tuoi clienti.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'yehHzeNbG2IKwQox2EuUhbNFR5ltvEuw-BDbWzR5fQQ',
  },
  robots: {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* JSON-LD: SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
        {/* JSON-LD: WebSite con SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body style={{ background: '#050816', color: 'white' }}>
        {/* Loader al caricamento */}
        <SmoothLoader />

        {/* Barra progresso scroll */}
        <ScrollProgress />

        {/* Header globale */}
        <Header />

        {/* Contenuto pagina */}
        <main>{children}</main>

        {/* Footer globale */}
        <Footer />
      </body>
    </html>
  )
}
