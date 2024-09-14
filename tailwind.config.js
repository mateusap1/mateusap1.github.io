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
    },
  },
  plugins: [],
}

