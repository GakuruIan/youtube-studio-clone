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
          50:"#F4F6FF",
          // 100:"#FBFEFF",
          // 100:"#F4F6FF",
          100:"#F4F9F9",
          200:"#FBFEFF"
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

