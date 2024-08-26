/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
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
        'grey-highlight': '#E6E6E6',
        'wine-violet': '#19082E',
        'wine-red': '#8C0B0F',
      },
    },
  },
  plugins: [require('daisyui')],
};
