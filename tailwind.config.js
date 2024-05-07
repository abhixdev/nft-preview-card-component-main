/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    extend: {
      colors: {
        Softblue: "hsl(215, 51%, 70%)",
        Cyan: "hsl(178, 100%, 50%)",
        VerydarkblueMainBG: "hsl(217, 54%, 11%)",
        VerydarkblueCardBG: " hsl(216, 50%, 16%)",
        VerydarkblueLine: " hsl(215, 32%, 27%)",
      },
      fontSize: {
        base: "18px", // Base/default
      },
    },
  },
  plugins: [],
};
