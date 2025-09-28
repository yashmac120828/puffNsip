/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        almond: "#EFDBBF",
        russet: "#7A4619",
        twine: "#C39658",
        leather: "#8D6C4F",
      },
    },
  },
  plugins: [],
}

