/** @type {import('tailwindcss').Config} */
// Design tokens mirror pistachio-portal v5. See DESIGN_SYSTEM.md before adding new ones.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAFAF6',
        'sage-ghost': '#F4F6EE',
        inset: '#F3F5EC',
        'sage-soft': '#E9EDDE',
        forest: { DEFAULT: '#3D5741', dark: '#33493A' },
        sage: '#A6B494',
        ink: '#2B3328',
        muted: '#6F7767',
        faint: '#9EA695',
        hairline: { DEFAULT: '#E8EAE0', 2: '#DADDCE' },
        bezel: '#1E231D',
      },
      fontFamily: {
        // `display` switches to Heebo automatically when <html lang="he"> (see index.css).
        display: ['var(--font-display)'],
        // Always Cormorant (wordmark, numerals), regardless of language.
        serif: ['"Cormorant Garamond"', 'Cormorant', 'Georgia', 'serif'],
        sans: ['Heebo', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        // Fluid display scale. Values live in CSS vars so Hebrew can use a calmer scale.
        'd-hero': ['var(--fs-hero)', { lineHeight: 'var(--lh-display)' }],
        'd-1': ['var(--fs-d1)', { lineHeight: 'var(--lh-display)' }],
        'd-2': ['var(--fs-d2)', { lineHeight: '1.12' }],
        'd-3': ['var(--fs-d3)', { lineHeight: '1.2' }],
        eyebrow: ['0.72rem', { lineHeight: '1rem', letterSpacing: '0.2em' }],
      },
      maxWidth: {
        site: '1240px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(43,51,40,.05)',
        up: '0 4px 16px rgba(43,51,40,.09)',
        phone: '0 40px 80px -30px rgba(43,51,40,.45), 0 12px 30px -12px rgba(43,51,40,.25)',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1.02) translate3d(0,0,0)' },
          '100%': { transform: 'scale(1.1) translate3d(-1.5%,-1%,0)' },
        },
      },
      animation: {
        'ken-burns': 'ken-burns 28s cubic-bezier(0.22, 0.61, 0.36, 1) infinite alternate',
      },
    },
  },
  plugins: [],
}
