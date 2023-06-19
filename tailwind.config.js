/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluecolor: "#2a68ff",
        greyish: "#f1f4f8",
        cardShadow: "#252b36",
      },
    },
  },
  plugins: [],
};
