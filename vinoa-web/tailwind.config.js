/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Julius Sans One', 'sans-serif'],
      //   serif: ['Merriweather', 'serif'],
      // },
      colors: {
        "gold-highlight": "#FFBB56",
        "grey-highlight": "#BCBACF",
        "violet-dark": "#232044",
        "violet-darker": "#1B183B",
        "violet-light": "#322E59",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myTheme: {
          "gold-highlight": "#FFBB56",
          "grey-highlight": "#BCBACF",
          "violet-dark": "#232044",
          "violet-darker": "#1B183B",
          "violet-light": "#322E59",
        },
      },
    ],
  },
};
