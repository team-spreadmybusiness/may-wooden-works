/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#556B2F",
        // primary: "",
        accent: '#CC5500',
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
}
