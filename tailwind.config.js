/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "Blue": "hsl(223, 87%, 63%)",

        "Pale-Blue": "hsl(223, 100%, 88%)",
        "Light-Red": "hsl(354, 100%, 66%)",

        "Gray": "hsl(0, 0%, 59%)",
        "Very-Dark-Blue": "hsl(209, 33%, 12%)",
      },
    },
  },
  plugins: [],
};
