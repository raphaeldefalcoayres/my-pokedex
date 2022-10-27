/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#272E4D',
        primary_light: '#313961',
        primary_light2: '#333C63',
        primary_light3: '#A6B1E1',
        primary_light4: '#CFD8FF',
        secondary: '#FFD76F',
        green: '#06A157',
        green_light: '#09AA5C',
        green_dark: '#077C44',
        red: '#9D2F2F',
        red_light: '#C14444',
        red_dark: '#692020',
        yellow: '#DCAF02',
        yellow_light: '#FFCB05',
        yellow_dark: '#997900',
        blue: '#028DDC',
        blue_light: '#05A5FF',
        blue_dark: '#006096',
        purple: '#6D2F9D',
        purple_light: '#9240C5',
        purple_dark: '#4D2069',
      },
    },
  },
  plugins: [],
}
