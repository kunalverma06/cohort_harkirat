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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#212121",
        background2: "hsl(0,0%,7%)",
        search_border:'hsl(0,0%,18.82%)',
        search_border2:'#1c62b9',
        search: "hsl(0 0% 18% / 1)",
        hovercolor:"rgb(255, 255, 255)"
      },
    },
  },
  plugins: [],
};
export default config;
