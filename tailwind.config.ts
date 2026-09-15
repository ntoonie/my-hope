import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8F0",
        warmwhite: "#FFFDF9",
        blush: {
          DEFAULT: "#F8D7E3",
          light: "#FCEAF1",
          deep: "#F0AFC8",
        },
        lavender: {
          DEFAULT: "#E7DEF5",
          light: "#F2ECFA",
          deep: "#CCB6E8",
        },
        rose: {
          DEFAULT: "#E8879A",
          deep: "#D9637C",
        },
        plum: {
          DEFAULT: "#4A3347",
          soft: "#7A5C74",
        },
        gold: "#D9A867",
      },
      fontFamily: {
        hand: ["var(--font-caveat)", "cursive"],
        body: ["var(--font-quicksand)", "sans-serif"],
      },
      keyframes: {
        drift: {
          "0%": { transform: "translateY(0) translateX(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "0.9" },
          "90%": { opacity: "0.7" },
          "100%": { transform: "translateY(-110vh) translateX(20px) rotate(25deg)", opacity: "0" },
        },
        "sparkle-pop": {
          "0%, 100%": { transform: "scale(0.8)", opacity: "0.4" },
          "50%": { transform: "scale(1.15)", opacity: "1" },
        },
        "gentle-float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1", transform: "scaleY(1)" },
          "50%": { opacity: "0.8", transform: "scaleY(0.92)" },
        },
        "confetti-fall": {
          "0%": { transform: "translateY(-10vh) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(540deg)", opacity: "0" },
        },
        "heart-beat": {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.15)" },
          "40%": { transform: "scale(1)" },
        },
      },
      animation: {
        drift: "drift linear infinite",
        sparkle: "sparkle-pop 2.4s ease-in-out infinite",
        float: "gentle-float 5s ease-in-out infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(0.22,1,0.36,1) forwards",
        "pop-in": "pop-in 0.5s cubic-bezier(0.22,1,0.36,1) forwards",
        wiggle: "wiggle 4s ease-in-out infinite",
        flicker: "flicker 1.6s ease-in-out infinite",
        "confetti-fall": "confetti-fall linear forwards",
        heartbeat: "heart-beat 1.8s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(74, 51, 71, 0.25)",
        polaroid: "0 6px 18px -4px rgba(74, 51, 71, 0.28), 0 2px 6px -2px rgba(74,51,71,0.15)",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
