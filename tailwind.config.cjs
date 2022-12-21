/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a2236",
        secondary: "#e2505c",
        tartiary: "#FAD0C4"
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      fairDisplay: ['Playfair Display', 'serif']
    }
  },
  plugins: [],
}
