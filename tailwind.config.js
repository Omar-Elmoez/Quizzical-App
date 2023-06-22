/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': 'Inter',
        'Karla': 'Karla',
      },
      colors: {
        'Mirage': '#1C1C1C',
        'nileBlue': '#293264',
        'Twilight': '#4D5B9E',
        'Geyser': '#D6DBF5',
        'vistaBlue': '#94D7A2',
        'teaRose': '#F8BCBC',
        'aliceBlue': '#F5F7FB',
      },
      backgroundImage: {
        'introImg': "url(/intro-page.svg)",
        'rightShape': "url(/Right_Shape.svg)",
        'leftShape': "url(/Left_Shape.svg)",
      }
    },
  },
  plugins: [],
}

