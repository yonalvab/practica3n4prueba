/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'planet-terra': "url('./src/assets/home/background-home-desktop.jpg')",
        'destination': "url('./src/assets/destination/background-destination-desktop.jpg')",
        'planet-top': "url('./src/assets/crew/background-crew-desktop.jpg')",
        'speed-light': "url('./src/assets/technology/background-technology-desktop.jpg')"
      }
    },
    fontFamily: {
      'barlow': ['Barlow', 'sans-serif']
    }
  },
  plugins: [],
}