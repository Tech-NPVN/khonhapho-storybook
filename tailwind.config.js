/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'green': '#197D16',
        'blue': '#1677FF',
        'red': '#F87272'
      },
      keyframes:{
        fadeIn: {
          '0%': {opacity: 0},
          '100%': {opacity: 1},
        }
      },
      animation: {
        'modal': 'fadeIn 0.3s linear ',
      },
    },
    plugins:[
      function({addUtilities}) {
        const newUtilities = {
          ".modal-animation" : {

          }
        }
      }
    ]
  },
  plugins: [],
}

