/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter Variable", "sans-serif"],
        montserrat: ["Montserrat Variable", "sans-serif"]
      },
      colors: {
        cyan: {
          pale: "#B2EBF2",
          bright: "#00BCD4",
          electric: "#00E5FF",
          light: "#84FFFF",
          dark: "#006064"
        },
        pink: {
          candy: "#F8BBD0",
          vivid: "#FF4081"
        },
        purple: {
          deep: "#311B92"
        },
        indigo: "#651FFF",
        lavender: "#D1C4E9",
      },
      lineHeight: {
        heading: "4.5rem",
        para: "1.625rem"
      },
      fontSize: {
        effect: "12.5rem",
        heading: "4rem",
        cardHeading: "2.5rem"
      },
      borderRadius: {
        "4xl": "4rem",
        "6xl": "6rem"
      },
      boxShadow: {
        all: "0 0 20px 5px rgba(0,0,0,0.2)",
        dark: "0 0 20px 5px rgba(0,0,0,0.1)"
      }
    },
  },
  plugins: [],
}

