/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "main-1": "#007B8E",
        "main-2": "#AB9C11",
        "main-3": "#CB9E06",
      },
      fontFamily: {
        geologica: "'Geologica', sans-serif",
        quicksand: "'Quicksand', sans-serif",
        raleway: "'Raleway', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
    },
  },
  plugins: [],
};
