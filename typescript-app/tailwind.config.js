/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyBg: '#EFF4FF',
        primary: '#ff0000',
        secondary: '#3B3B3B',
        tertiary: '#0000ff',
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        orange: '#fb923c',
        teal: '#14b8a6',
        purple: '#a855f7',
        pink: '#e74694',
        yellow: '#ecc94b',
      },
    },
  },
  plugins: [],
}
