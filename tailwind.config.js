/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:{
          DEFAUL:"1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem"
        }
      },
      fontFamily:{
        poppins:["Poppins", "sans-serif"],
        Khmer:["Khmer os Battambang"]
      }
    },
  },
  plugins: [],
}