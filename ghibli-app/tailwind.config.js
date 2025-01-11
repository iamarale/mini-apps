/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2DB084",
        "primary-dark": "#047857",
        secondary: "#1F2937",
      },
    },
  },
  plugins: [],
};
