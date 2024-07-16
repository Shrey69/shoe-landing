/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#c11912",
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        anton: ["Anton SC", "sans-serif"],
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      }, 

      container: {
        padding:{
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '2rem',
          xl: '4rem',
          '2xl': '6rem',
          '3xl': '8rem',
          '4xl': '10rem',
          '5xl': '12rem',
        }
          
        
      }
    },
  },
  plugins: [],
}

