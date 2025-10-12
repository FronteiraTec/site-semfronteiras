/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], // sobrescrevendo a padrão
        opensans: ['"Open Sans"', 'sans-serif'], // classe própria
      },
    },
  },
  plugins: [],
}
