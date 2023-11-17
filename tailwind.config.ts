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
        gren: '#589A8D',
        blu: '#3F7C85',

        'dark-light': '#181818'
      },
    },
  },
  plugins: [],
};
export default config;
