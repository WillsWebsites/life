/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      orbitron: ['Orbitron', 'sans-serif'],
    },
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
    },
    animation: {
      'fade-in-0': 'fadeIn 0s ease-in forwards',
      'fade-in-1': 'fadeIn 1s ease-in forwards',
      'fade-in-2': 'fadeIn 2s ease-in forwards',
      'fade-in-3': 'fadeIn 3s ease-in forwards',
      'fade-in-4': 'fadeIn 4s ease-in forwards',
      'fade-in-5': 'fadeIn 5s ease-in forwards',
      'fade-in-6': 'fadeIn 6s ease-in forwards',
      'fade-in-7': 'fadeIn 7s ease-in forwards',
      'fade-in-8': 'fadeIn 8s ease-in forwards',

      'fade-out-0': 'fadeOut 1s ease-in forwards',
      'fade-out-1': 'fadeOut 1s ease-in 1s forwards',
      'fade-out-2': 'fadeOut 1s ease-in 2s forwards',
      'fade-out-3': 'fadeOut 1s ease-in 3s forwards',
      'fade-out-4': 'fadeOut 1s ease-in 4s forwards',
      'fade-out-5': 'fadeOut 1s ease-in 5s forwards',
      'fade-out-6': 'fadeOut 1s ease-in 6s forwards',
      'fade-out-7': 'fadeOut 1s ease-in 7s forwards',
      'fade-out-8': 'fadeOut 1s ease-in 8s forwards',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      fadeOut: {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
