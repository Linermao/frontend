import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css: {
              "code::before": {content: ''},
              "code::after": {content: ''},
              code: {
                  backgroundColor: '#d5d5d5',
                  padding: '2px 4px',
                  borderRadius: '4px',
                  color: 'f47466'
                },
          },
        },
        invert: {
          css: {
              "code::before": {content: ''},
              "code::after": {content: ''},
              code: {
                  padding: '2px 4px',
                  borderRadius: '4px',
                  color: 'f47466'
                },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    heroui()
  ],
} satisfies Config;

