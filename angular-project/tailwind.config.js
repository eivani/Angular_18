/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Your Font Name', 'sans-serif'], // Replace 'sans-serif' with a fallback font
      },
    },
  },
  plugins: [],
}
