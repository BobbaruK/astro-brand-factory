/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        "Lecture-heading1": "clamp(1.75rem, 1.5278rem + 1.1111vw, 2.5rem)",
        "Lecture-heading2": "clamp(1.125rem, 1.0139rem + 0.5556vw, 1.5rem)",
        "Lecture-heading3": "clamp(1.125rem, 1.088rem + 0.1852vw, 1.25rem)",

        "BitcoinGuy-heading1": "clamp(1.1875rem, 0.7729rem + 2.0732vw, 2.25rem)",
        "BitcoinGuy-heading2": "clamp(1rem, 0.6098rem + 1.9512vw, 2rem)",
        "BitcoinGuy-heading3": "clamp(0.875rem, 0.8262rem + 0.2439vw, 1rem)",

        "HipsterGuy-heading1": "clamp(0.8125rem, 0.5833rem + 1.1458vw, 1.5rem)",
        "HipsterGuy-heading1-span": "clamp(1.5rem, 0.6667rem + 4.1667vw, 4rem)",
        "HipsterGuy-leading-para": "clamp(0.875rem, 0.6667rem + 1.0417vw, 1.5rem)",
        "HipsterGuy-form-title": "clamp(1.125rem, 0.9167rem + 1.0417vw, 1.75rem)",
        "HipsterGuy-heading2": "clamp(0.875rem, 0.6667rem + 1.0417vw, 1.5rem)",
        "HipsterGuy-heading3": "clamp(0.875rem, 0.6667rem + 1.0417vw, 1.5rem)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: ({ theme }) => ({
        // "HipsterGuy-headerBg": "repeating-linear-gradient(-45deg,#000,#000 1px,red 2px,red 4px)",
        "HipsterGuy-headerBg": `repeating-linear-gradient(-45deg,${theme("colors.black")},${theme("colors.black")} 1px,${theme("colors.gray.900")} 2px,${theme("colors.gray.900")} 4px)`,
        "HipsterGuy-heading1-span": `repeating-linear-gradient(-48deg,hsl(var(--primary-darken)),hsl(var(--primary-darken)) 1px,hsl(var(--primary)) 2px,hsl(var(--primary)) 6px)`,
      }),
      height: {
        "HipsterGuy-s1": "clamp(270px,62.5vw,750px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
