/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandYellow: '#FFD900',
        brandBlue: '#053361',
        lighBlue: '#005ab8',
        bgLightBlue: '#f0f7fc'
      }
    },
  },
  plugins: [],
}

