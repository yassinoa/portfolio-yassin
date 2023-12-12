/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        light: "url('/src/assets/5625780.jpg')",
        dark: "url('/src/assets/4882066.jpg')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
