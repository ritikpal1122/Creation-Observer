/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0F0F0F',
          800: '#1A1A1A',
          700: '#2A2A2A',
          600: '#3A3A3A',
          500: '#4A4A4A',
        },
        crimson: {
          900: '#7A0000',
          800: '#9A0000',
          700: '#B80000',
          600: '#D60000',
          500: '#FF0000',
          400: '#FF3333',
          300: '#FF6666',
        },
        accent: {
          purple: '#9333EA',
          blue: '#2563EB',
          gold: '#EAB308',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
      }
    },
  },
  plugins: [],
};