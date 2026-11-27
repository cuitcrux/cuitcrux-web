import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { cream: "#FFF8F0", blush: "#FFE4EC", rose: "#D98A9B", lavender: "#D9CCF2", wine: "#7A1F3D", ruby: "#C2344F" },
    fontFamily: { serif: ["var(--font-serif)", "serif"], hand: ["var(--font-hand)", "cursive"], sans: ["var(--font-sans)", "sans-serif"] },
    keyframes: {
      floatUp: { "0%": { transform: "translateY(0) rotate(0)", opacity: "0" }, "10%": { opacity: ".8" }, "100%": { transform: "translateY(-115vh) rotate(25deg)", opacity: "0" } },
      bob: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
      glow: { "0%,100%": { opacity: ".5" }, "50%": { opacity: "1" } },
    },
    animation: { floatUp: "floatUp linear infinite", bob: "bob 4s ease-in-out infinite", glow: "glow 2.5s ease-in-out infinite" },
  } },
  plugins: [],
};
export default config;
