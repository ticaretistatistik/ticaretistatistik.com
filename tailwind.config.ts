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
          yellow: "hsl(var(--brand-yellow))",
          ink: "hsl(var(--brand-ink))",
        }
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.zinc[300]'),
            '--tw-prose-headings': theme('colors.zinc[100]'),
            '--tw-prose-links': theme('colors.brand.yellow'),
            '--tw-prose-code': theme('colors.zinc[100]'),
            '--tw-prose-pre-bg': theme('colors.black'),
            '--tw-prose-pre-code': theme('colors.zinc[200]'),
            h1: { fontFamily: theme('fontFamily.serif')[0] },
            h2: { fontFamily: theme('fontFamily.serif')[0] },
            h3: { fontFamily: theme('fontFamily.serif')[0] },
            h4: { fontFamily: theme('fontFamily.serif')[0] },
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
