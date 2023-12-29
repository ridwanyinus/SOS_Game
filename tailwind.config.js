/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        small: "470px",
        widescreen: "1344px",
      },

      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        open: ["Open Sans", "serif"],
      },

      colors: {
        accentRed: "#FF1313",
        yellow: "#FFB548",
        dark: "#010101",
        darkbrown: "#1A1917",
        grey: "#979797",
        darkbrown: "#1A1917",
      },
    },
  },
  plugins: [],
};
