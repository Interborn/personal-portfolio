/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'violet2': '#ddd6fe',
        'violet3': '#c4b5fd',
        'violet8': '#5b21b6',
      },
    },
  },
  plugins: [],
}
