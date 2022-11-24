/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      darkBlue: '#001E6C',
      blue: '#035397',
      orange: '#E8630A',
      yellow: '#FCD900',
      white: '#FFFFFF',
      black: '#000000',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
