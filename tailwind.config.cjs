/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#001E6C',
        blue: '#035397',
        orange: '#E8630A',
        yellow: '#FCD900',
        white: '#FFFFFF',
        black: '#000000',
      },
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
