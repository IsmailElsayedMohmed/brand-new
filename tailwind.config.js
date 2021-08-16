const colors = require("tailwindcss/colors");
const {
  blueGray,
  coolGray,
  gray,
  trueGray,
  warmGray,
  amber,
  lime,
  sky,
  emerald,
  teal,
  cyan,
  indigo,
  violet,
  fuchsia,
  rose,
} = colors;
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray,
        coolGray,
        gray,
        trueGray,
        warmGray,
        amber,
        lime,
        emerald,
        sky,
        teal,
        cyan,
        indigo,
        violet,
        fuchsia,
        rose,
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
