/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /(text|border|bg)-(blue|purple|green|orange|red|amber|sky|indigo|fuchsia|pink|teal|cyan|emerald)-(400|500)/,
      variants: ["hover", "group-hover"],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        // Unified Midnight Slate palette matching syedamim _globalColor.scss
        gray: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#1e293b",
          800: "#111827",
          900: "#0b0f19",
          950: "#070a12",
        },
      },
    },
  },
  plugins: [],
};
