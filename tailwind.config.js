/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B1120',
        'navy-light': '#111827',
        copper: '#3B82F6',
        'copper-light': '#60A5FA',
        gold: '#818CF8',
        offwhite: '#F8FAFC',
        dark: '#0F172A',
        warmwhite: '#FFFFFF',
        accent: '#06B6D4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
 
 
 
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.06)',
        'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.08)',
        glow: '0 0 40px rgba(59, 130, 246, 0.15)',
        'glow-lg': '0 0 60px rgba(59, 130, 246, 0.25)',
        'glow-accent': '0 0 40px rgba(6, 182, 212, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #0B1120 0%, #111827 50%, #0F172A 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(59, 130, 246, 0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(129, 140, 248, 0.06) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(6, 182, 212, 0.06) 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
