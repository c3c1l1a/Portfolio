/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a2236",
        secondary: "#e2505c",
        tartiary: "#FAD0C4",
        primary5: "#e75d0d",
        gray01: "#102a42",
        gray03: "#324d67",
        gray05: "#617d98",
        gray09: "#dae2ec",
        gray10: "#f1f5f8"
      }
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif']
    }
  },
  plugins: [],
}
