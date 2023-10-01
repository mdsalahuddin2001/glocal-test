/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "567px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1319px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      colors: {
        primary: "#003D2B",
        secondary: "#ADE3BF",
        optionBg: "rgba(255, 255, 255, 0.79)",
      },
      boxShadow: {
        primary: "0px 0px 15px -6px rgba(0, 104, 56, 0.48)",
        "cardShadow-lg": "0px 4px 60px 0px rgba(0, 81, 43, 0.12)",
      },
    },
    fontFamily: {
      Inter: ["Inter"],
      GtExtraBold: ["GTSuperTxtTrialExtraBold"],
      GtBold: ["GTSuperTxtTrialBold"],
      GtBoldItalic: ["GTSuperTxtTrialBoldItalic"],
      Trump: ["TrumpSoftPro"],
      Roboto: ["Roboto", "sans-serif"],
      "font-feature-settings": "'clig' off, 'liga' off",
    },
    backgroundImage: {
      navbar:
        "linear-gradient(180deg, rgba(106, 130, 73, 0.68) 0%, #003D2B 100%)",
      about: "linear-gradient(180deg, #003D2B 0%, rgba(0, 61, 43, 0.86) 100%)",

      homeBanner: "url('/assets/home-banner.png')",
      network: "url('/assets/network-bg.png')",
      portfolioBanner: "url('/assets/portfolio.jpg')",
      experience: "linear-gradient(#003D2B, #026346)",
      portfolioColor:
        "linear-gradient(0deg, rgba(0, 61, 43, 0.79) 0%, rgba(0, 61, 43, 0.79) 100%)",
      contactHr: "rgba(255, 255, 255, 0.24)",
    },
  },
  plugins: [],
};
