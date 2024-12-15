import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFF5EE",
        secondary: "#75FBC0",
        tersier: "#5DC999",
        quatenary: "#05171C",
        defColorText: "#303030",
      },
      fontFamily: {
        tts: ['thick-thinks'],
        poppins: ['Poppins']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
