/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        skyblue: "#87ceeb",
        btnColor: "#00a5ef",
        textColor: "#46127b",
      },
    },
  },
  plugins: [],
};
