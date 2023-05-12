/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs2': '320px',
        'sm2': '480px',
        'md2': '768px',
        'lg2': '976px',
        'xl2': '1440px',
      },
      colors: {
        'darkBlue': '#0e162a',
        'blue2': '#1fb6ff',
        'purple2': '#7e5bef',
        'pink2': '#ff49db',
        'orange2': '#ff7849',
        'green2': '#13ce66',
        'yellow2': '#ffc82c',
        'gray-dark2': '#273444',
        'gray2': '#8492a6',
        'gray-light2': '#d3dce6',
      },
      fontFamily: {
        roboto : ['Roboto', 'sans-serif']
      },
      fontSize: {
        'xxs': '.65rem',  // custom extra small size
        'md2': '.95rem',  //
      },
      spacing : {
        '128': '32rem',
        '144': '36rem',
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [require("daisyui")],
}

