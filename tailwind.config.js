/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:{
           50:"#292929",
           100:"#232323",
           200:"#212121",
        },
        light:{
          20:"#dfe5e8",
          50:"#EFEFF5"
        }
      },
      fontFamily:{
          saira:['Saira Condensed','sans serif'],
          poppins:['poppins','sans serif']
      } 
    },
  },
  plugins: [],
}

