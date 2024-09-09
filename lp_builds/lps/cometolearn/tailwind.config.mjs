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
        "classic-heading1": "clamp(1.5rem, 1.3519rem + 0.7407vw, 2rem)",
        "classic-paraLead": "clamp(1.5rem, 1.4259rem + 0.3704vw, 1.75rem)",
        "classic-remake-heading1": "clamp(1.5rem, 1.3519rem + 0.7407vw, 2rem)",
        "classic-remake-paraLead":
          "clamp(1.25rem, 1.1389rem + 0.5556vw, 1.625rem)",
        "classic-remake-formTitle":
          "clamp(1.5rem, 1.4259rem + 0.3704vw, 1.75rem)",
        "professional-black-heading1":
          "clamp(1.25rem, 0.9537rem + 1.4815vw, 2.25rem)",
        "professional-black-heading2":
          "clamp(1.125rem, 1.0509rem + 0.3704vw, 1.375rem)",
        "professional-black-paraLead":
          "clamp(1rem, 0.9259rem + 0.3704vw, 1.25rem)",
        "professional-black-formTitle":
          "clamp(0.875rem, 0.7639rem + 0.5556vw, 1.25rem)",
        "professional-black-v2-heading1":
          "clamp(1.25rem, 0.9167rem + 1.6667vw, 2.25rem)",
      },
      gridTemplateRows: {
        siteLayout: "auto 1fr auto",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
