/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        greens:{
          100:'#6D8C54',
          200:'#263C28',
          300:'#334B35'
        },
        oranges:{
          100:'#F7C35F',
          
        }
      },
      backgroundImage:{
        header: 'url("../src/assets/headerbg.svg")',
        future: 'url("../src/assets/futurebg.svg")'
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  plugins: [],
}

