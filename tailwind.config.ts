import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      bg: {
        page: "hsl(var(--bg-page))",
        panel: "hsl(var(--bg-panel))",
        elevated: "hsl(var(--bg-elevated))",
      },
      text: {
        primary: "hsl(var(--text-primary))",
        secondary: "hsl(var(--text-secondary))",
        muted: "hsl(var(--text-muted))",
      },
      accent: "hsl(var(--accent))",
      border: {
        soft: "hsl(var(--border-soft))",
        strong: "hsl(var(--border-strong))",
      },
    },
    borderRadius: {
      sm: "var(--radius-sm)",
      md: "var(--radius-md)",
      lg: "var(--radius-lg)",
    },
    boxShadow: {
      soft: "var(--shadow-soft)",
      panel: "var(--shadow-panel)",
    },
    lineHeight: {
      tight: "var(--leading-tight)",
      normal: "var(--leading-normal)",
    },
  },
},

  plugins: [],
}

export default config
