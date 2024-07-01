import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gap: {
        52: "52px",
      },
      borderRadius: {
        20: "20px",
      },
      fontSize: {
        "h2-md": ["60px", { fontWeight: 500 }],
        "h3-md": ["48px", { fontWeight: 500 }],
        "h4-md": [
          "36px",
          {
            fontWeight: 500,
          },
        ],
        "h5-md": ["30px", { fontWeight: 500 }],
        h6: ["24px", { fontWeight: 400 }],
        "h6-md": ["24px", { fontWeight: 500 }],
        "sub-headline": [
          "20px",
          {
            fontWeight: 400,
          },
        ],
        "sub-headline-md": ["20px", { fontWeight: 500 }],
        "body-1-reg": ["18px", { fontWeight: 400 }],
        "body-1-md": ["18px", { fontWeight: 500 }],
        "body-1-sb": ["18px", { fontWeight: 600 }],
        "body-2": [
          "16px",
          {
            fontWeight: 400,
          },
        ],
        "special-1": [
          "14px",
          {
            fontWeight: 400,
          },
        ],
      },
      colors: {
        ib: {
          black: "#171717",
          heading: "#272727",
          primary: "#0228E5",
          secondary: "#1F0198",
          tertiary: "#00AFEF",
          error: "#FF8E8E",
          accent: {
            100: "#FF740F",
          },
          grey: {
            50: "#F7F8F8",
            100: "#EDEEF1",
            200: "#D8DBDF",
            300: "#B6BAC3",
            400: "#8E95A2",
            500: "#6B7280",
            600: "#5B616E",
            700: "#4A4E5A",
            800: "#40444C",
            900: "#383A42",
            950: "#25272C",
          },
          blue: {
            50: "#EEEEFF",
            100: "#E0E1FF",
            200: "#C7C8FE",
            300: "#A5A7FC",
            400: "#8184F8",
            500: "#6366F1",
            600: "#4649E5",
            700: "#383BCA",
            800: "#3032A3",
            900: "#2E3081",
            950: "#1B1C4B",
          },
          linear: "",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        text: "linear-gradient(344deg, #001A9A 34.37%, #0400E0 40.8%, #00A3FF 48.96%)",
        hero: "url('../assets/bg_pattern.png')",
      },
      boxShadow: {
        nav: "0px 5px 74px 0px rgba(0, 0, 0, 0.05)",
        button: "-8px 2px 24px 1px rgba(0, 0, 0, 0.04)",
        mainButton: "-17px 8px 44px 1 rgba(0, 0, 0, 0.16)",
        verify: "-25px 8px 164px -19px rgba(0, 0, 0, 0.04)",
        course: "0px 2px 34px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
