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
    extend: {
      colors: {
        myBlue: '#00A3FF',
        "custom-blue": "#1188ff",
        myGrey: '#F2F2F2',
        myDarkGrey: '#CCCCCC',
        myLightBlue: '#F5FBFF'
      },
    },
  },
  plugins: [],
}
