/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow:{
      'lg': '0 0px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    extend: {
      screens: {
        'xs': '350px',
      },
      colors: {
        myBlue: '#00A3FF',
        "custom-blue": "#1188ff",
        "custom-light-blue": "#DEF3FF",
        'custom-light-blue-shadow': "rgba(0,163,255,0.25)",
        myGrey: '#F2F2F2',
        myDarkGrey: '#CCCCCC',
        myLightBlue: '#F5FBFF'
      },
    },
  },
  plugins: [],
}
