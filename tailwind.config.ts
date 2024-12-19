import type { Config } from "tailwindcss";

export default {
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
        primary: "#1570EF",
        secondary: "#414651",
        muted: "#F5F5F5",
        "primary-foreground": "#175CD3",
      },
      borderColor: {
        DEFAULT: "#D5D7DA",
        blue: "#B2DDFF",
      },
      

      boxShadow: {
        xs: "box-shadow: 0px 1px 2px 0px var(--ColorsEffectsShadowsshadow-xs);",
        "active-sidebar":
          "box-shadow: 0px 1px 2px 0px var(--ColorsEffectsShadowsshadow-xs); box-shadow: 0px -2px 0px 0px var(--ColorsEffectsShadowsshadow-skeumorphic-inner) inset; box-shadow: 0px 0px 0px 1px var(--ColorsEffectsShadowsshadow-skeumorphic-inner-border) inset;",
          "signin-card": "box-shadow: 0px 1px 2px 0px var(--ColorsEffectsShadowsshadow-xs);"
      },
    },
  },
  plugins: [],
} satisfies Config;
