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
        primary:'#f6f8ee',
        secondary: '#b8cabe',
        third: '#FAF3DD',
        fourth: '#8FC1B5',
        blu2: '#02273F',
        blu: '#021930',
        gold: '#BB8F67',
      },
    },
  },
  plugins: [],
};
export default config;
