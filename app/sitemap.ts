import { MetadataRoute } from 'next'
import { SILO_PAGES } from '@/lib/silo-pages'

const baseRoutes: MetadataRoute.Sitemap = [
  {
    url: 'https://locario.net',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    url: 'https://locario.net/funzionalita',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: 'https://locario.net/prezzi',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    url: 'https://locario.net/tracciamento-prenotazioni',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  },
  {
    url: 'https://locario.net/prenotazioni-online',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: 'https://locario.net/come-funziona',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: 'https://locario.net/gestionale-prenotazioni-ristorante',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: 'https://locario.net/gestionale-prenotazioni-pizzeria',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: 'https://locario.net/gestionale-prenotazioni-parrucchieri',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: 'https://locario.net/gestionale-prenotazioni-centro-estetico',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: 'https://locario.net/gestionale-prenotazioni-bb',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: 'https://locario.net/gestione-clienti',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: 'https://locario.net/contatti',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    url: 'https://locario.net/privacy',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.3,
  },
]

const siloRoutes: MetadataRoute.Sitemap = Object.values(SILO_PAGES).map((page) => ({
  url: `https://locario.net${page.path}`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: page.path.includes('ristorante') || page.path.includes('bar') ? 0.82 : 0.76,
}))

export default function sitemap(): MetadataRoute.Sitemap {
  return [...baseRoutes, ...siloRoutes]
}
