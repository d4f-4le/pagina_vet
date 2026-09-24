export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bosque: {
          DEFAULT: "#24513F",
          dark: "#173629",
          light: "#EEF3EC",
        },
        miel: {
          DEFAULT: "#D98F3B",
          dark: "#B9711F",
        },
        crema: "#FBF8F2",
        tinta: "#23231F",
        piedra: "#6B7568",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        cuerpo: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
