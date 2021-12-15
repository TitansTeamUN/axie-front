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
        darkPurpleDarkest: "#130D1D",
        // axie class colors
        clAquatic: "#00b8ce",
        clBeast: "#ffb812",
        clBug: "#ff5341",
        clBird: "#ff8bbd",
        clPlant: "#6cc000",
        clReptile: "#dc8be4",
        clDawn: "#beceff",
        clDusk: "#beceff",
        clMech: "#c6bdd4",
      },
      fontFamily: {
        cursive: ["Luckiest Guy"],
        cursiveTwo: ["Changa One"],
      },

      fontSize: {
        xxs: [
          "0.58rem",
          {
            lineHeight: "0.75rem",
          },
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
