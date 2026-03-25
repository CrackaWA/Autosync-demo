import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep Navy for Trust & Institutional Authority
        enterprise: {
          navy: '#0A1428', 
          blue: '#112240',
          light: '#CCD6F6',
        },
        // Vibrant Green for Growth & Conversion
        growth: {
          accent: '#00E676',
          hover: '#00C853',
        }
      },
      fontSize: {
        // Fluid typography scaling
        'fluid-base': 'clamp(1rem, 1vw + 0.875rem, 1.25rem)',
        'fluid-lg': 'clamp(1.25rem, 1.5vw + 1rem, 1.75rem)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean, highly readable enterprise standard
      }
    },
  },
  plugins: [],
}
export default config
