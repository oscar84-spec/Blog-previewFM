/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: "320px",
      md: "375px",
      lg: "425px",
      xl: "768px",
      "2xl": "1024px",
      "3xl": "1244px",
      "4xl": "1440px",
    },
    colors: {
      fondo: "#F4D04E",
      card: "#ffffff",
      letra: "#111111",
      description: "#7f7f7f",
    },
    fontFamily: {
      sans: ["fuente", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
