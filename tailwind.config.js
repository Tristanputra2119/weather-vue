/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',               // Include the index.html file
    './src/**/*.{vue,js,ts,jsx,tsx}', // Include all source files
  ],
  theme: {
    extend: {
      colors : {
        "weather-primary" : "#00758a",
        "weather-secondary" : "#004E71"
      },
      fontFamily : {
        Roboto : ["Roboto", "sans-serif"],
      },
      container: {
        padding : "2rem",
        center : true
      },
      screens : {
        sm : "640px",
        md : "768px"
      }
    },
  },
  plugins: [],
}

