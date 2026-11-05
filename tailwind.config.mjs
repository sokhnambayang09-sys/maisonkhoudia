/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold:         '#D4AF37',
        'gold-dark':  '#B8962E',
        'gold-light': '#E8C84A',
        brown:        '#2C1810',
        'brown-light':'#5C3D2E',
        cream:        '#F5EBD8',
        'cream-light':'#FAFAF8',
        'cream-dark': '#E8D5B5',
        'luxury-black':'#1A1A1A',
        'luxury-gray': '#6B6B6B',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(90deg, #D4AF37, #E8C84A, #D4AF37)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '8xl': '88rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      letterSpacing: {
        'widest-2': '0.2em',
        'widest-3': '0.3em',
      },
      boxShadow: {
        'card':        '0 2px 20px rgba(0,0,0,0.08)',
        'card-hover':  '0 8px 40px rgba(0,0,0,0.14)',
        'luxury-md':   '0 4px 24px rgba(0,0,0,0.18)',
      },
    },
  },
  plugins: [],
};
