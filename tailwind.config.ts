import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        orbitron: [`var(--font-orbitron-font)`],
        eight_track_hollow: [`var(--font-eight_track_hollow-font)`],
        eight_track: [`var(--font-eight_track-font)`],
        astral_delight: [`var(--font-astral_delight-font)`],
        astral_delight_hollow: [`var(--font-astral_delight_hollow-font)`],
      },
      fontSize: {
        xxs: "0.5rem",
        xxxs: "0.4rem",
      },
    },
  },
  plugins: [],
};
export default config;
