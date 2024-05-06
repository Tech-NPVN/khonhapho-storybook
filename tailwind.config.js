/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'green': '#197D16',
        'blue': '#1677FF',
        'red': '#F87272'
      }
    },
  },
  plugins: [],
}

