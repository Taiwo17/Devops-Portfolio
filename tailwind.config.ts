import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#080808", panel: "#0f0f0f", line: "#222", mute: "#8a8a85", lime: "#c4ff3d" },
    fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"], mono: ["var(--font-mono)", "ui-monospace", "monospace"] },
  } },
  plugins: [],
};
export default config;
