import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#75553350',
        secondary: '#b8cabe',
        fourth: '#8FC1B5',
        blu2: '#02273F',
        blu: '#021930',
        gold: '#BB8F67',
        goldf: '#5E442E',
        gold2:"#B29600",
      },
    },
  },
  plugins: [],
};
export default config;
