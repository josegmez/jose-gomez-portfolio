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
        paragraph: "var(--paragraph)",
        primary: "#FFB400",
        white: "#FFFFFF",
        green: "#7EB942",
      },
    },
  },
  plugins: [],
};
export default config;
