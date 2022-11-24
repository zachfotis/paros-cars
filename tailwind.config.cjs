/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {},
      screens: {
        mobile: { max: '450px' },
        tablet: { max: '768px' },
        laptop: { max: '1024px' },
        laptopLG: { max: '1200px' },
        desktop: { max: '1440px' },
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
};
