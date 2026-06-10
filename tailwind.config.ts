import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        linen: "#F8F1E9",
        clay: "#B86D52",
        cocoa: "#4C342C",
        sage: "#7D9281",
        ink: "#2C2927"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(76, 52, 44, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
