/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tableHead: "#1B4332E5",
        customGreen: "#1B4332",
        matchTimetable: "#377E5E",
      },
      letterSpacing: {
        0.5: "0.5rem",
      },
    },
  },
  plugins: [],
};
