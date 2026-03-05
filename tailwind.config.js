/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#f4efe6',
        ocean: '#1e3a5f',
        treasure: '#c6a75e',
        sand: '#e6dccb',
        ink: '#2b2b2b',
      }
    },
  },
  plugins: [],
}