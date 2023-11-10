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
        primary:'#4d4d4d',
        secondary: '#f4f8fd',
        dark: '#121212',
        'dark-light': '#181818'
      },
    },
  },
  plugins: [],
};
export default config;
