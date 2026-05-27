/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['locario.net', 'app.locario.net'],
  },
  // Abilita strict mode per React
  reactStrictMode: true,
}

module.exports = nextConfig
