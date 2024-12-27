/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter Variable", "sans-serif"]
      },
      colors: {
        coralPink: '#F76680',
        darkPurple: '#57007B',
        textGray: "#4A5568"
      }
    },
  },
  plugins: [],
}

