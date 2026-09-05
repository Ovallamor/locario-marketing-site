/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['locario.net', 'app.locario.net'],
  },
  // Abilita strict mode per React
  reactStrictMode: true,
  // Consolidamento SEO: pagine cannibalizzate unite sul pillar di settore (audit seo-strategy-silo, sett. 2026)
  async redirects() {
    return [
      {
        source: '/software-prenotazioni-ristorante',
        destination: '/gestionale-prenotazioni-ristorante',
        permanent: true,
      },
      {
        source: '/prenotazioni-online-ristorante',
        destination: '/gestionale-prenotazioni-ristorante',
        permanent: true,
      },
      {
        source: '/agenda-online-parrucchieri',
        destination: '/gestionale-prenotazioni-parrucchieri',
        permanent: true,
      },
      {
        source: '/agenda-online-centro-estetico',
        destination: '/gestionale-prenotazioni-centro-estetico',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
