/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          rose: '#fca5a5',
          roseDark: '#f87171',
          navy: '#063058',
          deep: '#03172b',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-dot': {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '30%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(12px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
        'scroll-dot': 'scroll-dot 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
