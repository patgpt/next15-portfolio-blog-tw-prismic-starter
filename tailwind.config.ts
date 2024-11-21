import typography from '@tailwindcss/typography';
import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'from-yellow-200',
    'via-white',
    'to-purple-300',
    'from-blue-800',
    'via-slate-900',
    'to-purple-800',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        surface: "var(--surface)",
        'matrix-green': '#00ff00',
      },
      backgroundColor: {
        'surface-light': 'rgba(255, 255, 255, 0.3)',
        'surface-dark': 'rgba(0, 0, 0, 0.3)',
      },
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3, h4': {
              color: 'var(--foreground)',
            },
            'a': {
              color: 'var(--primary-light)',
              textDecoration: 'none',
              transition: 'color 0.2s ease-in-out',
              '&:hover': {
                color: 'var(--primary-dark)',
              },
            },
            'blockquote': {
              borderLeftColor: 'var(--primary-light)',
              backgroundColor: 'var(--surface)',
            },
          },
        },
      },
      backdropBlur: {
        'glass': '10px',
      },
      keyframes: {
        glitchTop: {
          '0%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(2px, -2px)' },
          '66%': { transform: 'translate(-2px, 2px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        glitchBottom: {
          '0%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(-2px, 2px)' },
          '66%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        walk: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100px)' },
        },
      },
      animation: {
        glitchTop: 'glitchTop 1s infinite',
        glitchBottom: 'glitchBottom 1s infinite',
        walk: 'walk 3s linear infinite',
      },
      fontFamily: {
        'matrix': ['Consolas', 'Monaco', 'Andale Mono', 'monospace'],
      },
    },
  },
  plugins: [typography],
} satisfies Config;
