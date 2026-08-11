/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Clean off-white canvas + warmer ivory for alternating sections.
        cream: {
          DEFAULT: '#FAFAFA',
          warm: '#F6F4EF',
          deep: '#EFEBE3',
        },
        // Sage green accent scale built around the logo green (#9FAF90 / #A2B997).
        // 500 = brand. 700/800 are AA-safe for text on light backgrounds.
        sage: {
          50: '#F4F7F1',
          100: '#E8EEE2',
          200: '#D5E0C9',
          300: '#BFD0AF',
          400: '#A2B997',
          500: '#9FAF90',
          600: '#7E9070',
          700: '#5E6E50',
          800: '#49563E',
          900: '#3A4531',
        },
        // Soft charcoal text (never pitch black) per the brand brief.
        charcoal: {
          DEFAULT: '#2D2D2D',
          soft: '#4A4A4A',
          muted: '#6B6B6B',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.18em',
        wider2: '0.28em',
      },
      maxWidth: {
        content: '1200px',
        prose2: '68ch',
      },
      boxShadow: {
        soft: '0 18px 50px -24px rgba(45, 45, 45, 0.18)',
        card: '0 10px 36px -18px rgba(45, 45, 45, 0.16)',
        lift: '0 24px 60px -28px rgba(45, 45, 45, 0.28)',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'soft-pan': {
          '0%': { transform: 'scale(1.06)' },
          '100%': { transform: 'scale(1.14)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
