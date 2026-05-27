import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'locario-bg': '#050816',
        'locario-bg-soft': '#0B1020',
        'locario-primary': '#6C63FF',
        'locario-secondary': '#00D4FF',
        'locario-accent': '#22C55E',
        'locario-muted': '#A1A1AA',
        'locario-warm': '#F59E0B',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-locario': 'linear-gradient(135deg, #6C63FF, #00D4FF)',
      },
      boxShadow: {
        'glow-primary': '0 0 40px rgba(108, 99, 255, 0.3)',
        'glow-secondary': '0 0 40px rgba(0, 212, 255, 0.3)',
        'glow-accent': '0 0 40px rgba(34, 197, 94, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config
