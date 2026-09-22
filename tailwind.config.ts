import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./docs/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'serif'],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        brand: {
          accent: "hsl(var(--brand-accent))",
          ink: "hsl(var(--brand-ink))",
          light: "hsl(var(--brand-light))",
        }
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.slate[700]'),
            '--tw-prose-headings': theme('colors.brand.ink'),
            '--tw-prose-links': theme('colors.brand.accent'),
            '--tw-prose-code': theme('colors.brand.ink'),
            '--tw-prose-pre-bg': theme('colors.slate[900]'),
            '--tw-prose-pre-code': theme('colors.slate[100]'),
            h1: { fontFamily: theme('fontFamily.sans')[0], fontWeight: '700' },
            h2: { fontFamily: theme('fontFamily.sans')[0], fontWeight: '600' },
            h3: { fontFamily: theme('fontFamily.sans')[0], fontWeight: '600' },
            h4: { fontFamily: theme('fontFamily.sans')[0], fontWeight: '600' },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
export default config;
