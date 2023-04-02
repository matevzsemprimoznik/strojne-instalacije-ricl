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
        myGrey: '#F2F2F2',
        myDarkGrey: '#CCCCCC',
        myLightBlue: '#F5FBFF'
      },
    },
  },
  plugins: [],
}
