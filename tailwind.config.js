/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      boxShadow: {
        custom: "10px 10px 5px 1px rgba(0, 100, 176, 1)",
      },
      screens: {
        xs: "468px",
        xxs: "280px",
        xsm: "420px",
      },
    },
  },
  plugins: [],
};
