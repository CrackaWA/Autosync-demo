/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'enterprise-navy': '#0A1428',
        'enterprise-blue': '#112240',
        'enterprise-light': '#CCD6F6',
        'growth-green': '#00E676',
        'growth-hover': '#00C853',
      },
    },
  },
  plugins: [],
}
