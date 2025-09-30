/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'geist': ['Geist', 'sans-serif'],
      },
      colors: {
        'bar-gold': '#D4AF37',
        'bar-dark': '#1a1a1a',
        'bar-light': '#f8f8f8',
      },
    },
  },
  plugins: [],
}
