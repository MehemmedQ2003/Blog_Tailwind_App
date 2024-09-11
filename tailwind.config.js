/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins'],
        'roboto' :['Roboto'],
      }
    },
  },
  plugins: [],
}

