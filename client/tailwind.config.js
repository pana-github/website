/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      body: [
        "Hiragino Sans",
        "ヒラギノ角ゴシック",
        "メイリオ",
        "Meiryo",
        "MS Ｐゴシック",
        "MS PGothic",
        "sans-serif",
        "YuGothic",
        "Yu Gothic",
      ],
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            primary: {
              100: "#DAE8F5",
              200: "#B8D1EB",
              300: "#83A1C3",
              400: "#506888",
              500: "#1A2639",
              600: "#131D31",
              700: "#0D1529",
              800: "#080E21",
              900: "#040A1B",
              DEFAULT: "#1A2639",
            },
            secondary: {
              100: "#FCE5D9",
              200: "#FAC6B4",
              300: "#F09D8B",
              400: "#E1766B",
              500: "#C24D2C",
              600: "#B02D37",
              700: "#931F32",
              800: "#76132C",
              900: "#620B29",
              DEFAULT: "#C24D2C",
            },
            success: {
              100: "#E5EDF7",
              200: "#CCDCEF",
              300: "#A2B5CF",
              400: "#7485A0",
              500: "#3E4A61",
              600: "#2D3953",
              700: "#1F2945",
              800: "#131C38",
              900: "#0B122E",
              DEFAULT: "#3E4A61",
            },
          },
        },
      },
    }),
  ],
};
