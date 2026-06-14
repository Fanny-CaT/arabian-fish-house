import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#1a2e4a', light: '#2a4a72', dark: '#0d1f33' },
        gold: { DEFAULT: '#e8a94a', light: '#f2c278', dark: '#c4862a' },
        ocean: { DEFAULT: '#0d5c8a', light: '#1a7fbf' },
        cream: { DEFAULT: '#f9f5ee', dark: '#ede8df' }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
