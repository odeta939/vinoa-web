/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Julius Sans One', 'sans-serif'],
        serif: ['Noto', 'serif'],
      },
      colors: {
        accent: '#800020',
        'gold-highlight': '#FFBB56',
        'violet-dark': '#232044',
        'violet-darker': '#1B183B',
        'violet-light': '#322E59',

        // new colors
        'grey-highlight': '#F5F5F5',
        'wine-violet': '#19082E',
        'wine-red': '#8C0B0F',
      },
    },
  },
  plugins: [require('daisyui')],
};
