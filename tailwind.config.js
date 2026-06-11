/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#CD4439', // Dominant terracotta/burnt red from screenshots
          dark: '#9C2F24',    // Deep red from Stitch config
          container: '#BD4739',
          tint: '#A8382B'
        },
        cream: {
          DEFAULT: '#F7DEAD', // Warm cream background from screenshots
          light: '#FFF8F5',   // Light cream/peach background
          beige: '#F5E1B1'    // Beige background from Sample Works sections
        },
        charcoal: '#1E1B18', // Dark text color
        "on-surface": '#1E1B18',
        "on-surface-variant": '#58413E',
        outline: '#8B716D',
        "outline-variant": '#DFBFBB'
      },
      fontFamily: {
        headline: ['"Archivo Narrow"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
