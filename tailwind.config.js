/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        primary: '#FFD21F',
        white: '#FFFFFF',
        secondary: '#A1A1AA',
        card: '#111111',
        border: '#242424',
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(to right, #242424 1px, transparent 1px),
                         linear-gradient(to bottom, #242424 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
    },
  },
  plugins: [],
}
