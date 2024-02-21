import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'sm-hero-background-image': "url('/Home/sm-hero-background-image.png')",
      'md-hero-background-image': "url('/Home/md-hero-background-image.png')",
      'lg-hero-background-image': "url('/Home/lg-hero-background-image.png')",
      'xl-hero-background-image': "url('/Home/xl-hero-background-image.png')",
      '2xl-hero-background-image': "url('/Home/2xl-hero-background-image.png')"
    },
    opacity: {
      'hero-background-image': "60%"
    }
  },
  plugins: [],
};

export default config;
