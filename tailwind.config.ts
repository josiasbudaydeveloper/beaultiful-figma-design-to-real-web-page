import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'hero-background-image': "url('/Home/hero-background-image.png')"
    },
    opacity: {
      'hero-background-image': "60%"
    }
  },
  plugins: [],
};

export default config;
