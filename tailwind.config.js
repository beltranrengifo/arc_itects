module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        base: ['"Nunito Sans"', 'sans-serif'], // font-base
        cursive: ['"Amiri"', 'serif'], // font-cursive
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
