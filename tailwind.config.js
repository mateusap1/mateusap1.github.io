/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Source Code Pro'],
        'title': ['Roboto Slab']
      },
      colors: {
        'offblue': '#8EA7CA',
      }
    },
  },
  plugins: [],
}

