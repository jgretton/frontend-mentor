/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        //Challenge 1
        Nutmeg: "hsl(14, 45%, 36%)",
        "Dark-Raspberry": "hsl(332, 51%, 32%)",
        "Rose-White": "hsl(330, 100%, 98%)",
        Eggshell: "hsl(30, 54%, 90%)",
        "Light-Grey": "hsl(30, 18%, 87%)",
        "Wenge-Brown": "hsl(30, 10%, 34%)",
        "Dark-Charcoal": "hsl(24, 5%, 18%)",

        //Challenge 2
        Green: "hsl(75, 94%, 57%)",

        //Challenge 3
        "Light-pink": "hsl(275, 100%, 97%)",
        "Grayish-purple": "hsl(292, 16%, 49%)",
        "Dark-purple": "hsl(292, 42%, 14%)",
      },

      backgroundImage: {
        "3-challenge-mobile":
          "url('/images/challenges/3/background-pattern-mobile.svg')",
        "3-challenge-desktop":
          "url('/images/challenges/3/background-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
};
