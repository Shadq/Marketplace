/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      newFont: "Space Grotesk",
    },
    extend: {
      backgroundImage: {
        heroBG: "url('assets/herobg.jpg')",
        bannerBG: "url('assets/banner.jpg')",
      },
      width: {
        halfWidth: "50vw",
        bbc: "500px",
      },
      height: {
        bigOne: "500px",
        bannerHeight: "83vh",
      },
      colors: {
        goodGray: "#18181A",
        goodAqua: "#A1EBEF",
        goodGreen: "#6FFA4E",
        goodRed: "#FE5031",
      },
    },
  },
  plugins: [],
};
