/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: "#616161",
        purple: '#7500CF',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif']
      }
    },
  },
};
