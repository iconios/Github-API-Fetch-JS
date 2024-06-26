/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bright-purple": "#5124E5" 
      },
      screens: {
        'sm': '320px',
        // => @media (min-width: 320px) { ... }
      }
    },
  },
  plugins: [],
}

