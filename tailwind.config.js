/** @type {import('tailwindcss').Config} */

const defautTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "rgba(var(--black))",
        white: "rgba(var(--white))",
        orange: {
          100: "rgba(var(--orange-100))",
          200: "rgba(var(--orange-200))",
        },
        blue: {
          100: "rgba(var(--blue-100))",
          200: "rgba(var(--blue-200))",
        },
        green: {
          100: "rgba(var(--green-100))",
          200: "rgba(var(--green-200))",
        },
        pink: {
          100: "rgba(var(--pink-100))",
          200: "rgba(var(--pink-200))",
        },
        yellow: {
          100: "rgba(var(--yellow-100))",
          200: "rgba(var(--yellow-200))",
        },
        error: "rgba(var(--error))",
      },

      fontFamily: {
        hero: ["Chopin", "sans-serif"],
        sans: ["Poppins", "sans-serif", defautTheme.fontFamily.sans],
        logo: ["Transforma Mix", "sans-serif"],
      },
    },
  },
};
