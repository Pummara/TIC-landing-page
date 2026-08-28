import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0C2A4D',
          light: '#1E4370',
          deep: '#081B33',
        },
        paper: {
          DEFAULT: '#F5F7F6',
          ply: '#EAF0F5',
          white: '#FFFFFF',
        },
        gold: {
          DEFAULT: '#D4AA47',
          // Same hue/saturation, darkened for legibility. `dark` clears 3:1
          // (large/bold text, graphical marks); `text` clears 4.5:1 (small
          // body/label text) — the DEFAULT fails both on light ground.
          dark: '#B08829',
          text: '#7D6318',
        },
        slatecopy: '#5B6B7C',
      },
      fontFamily: {
        sans: ['"Inter"', '"Prompt"', 'sans-serif'],
        display: ['"Big Shoulders Display"', '"Prompt"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
} satisfies Config
