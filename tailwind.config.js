/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      sm:'0px',
      md:'718px',
      lg: '1024px',
      xl: '1200px'
    }
  },
  plugins: [],
}