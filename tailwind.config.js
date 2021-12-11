module.exports = {
  purge: ["src/**/*.jsx", "src/**/*.tsx", "src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        oldBurgundy: "#362023",
        onyx: "#3E4042",
        deepSpaceSparkie: "#466060",
        sonicSilver: "#757780",
        greenSheen: "#5BAD9D",
        mediumAquamarine: "#41E2BA",
        darkPurpleMain: "#201335",
        darkPurpleSecondary: "#261D34",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
