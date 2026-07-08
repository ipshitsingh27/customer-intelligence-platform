/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#08090D',
          900: '#0B0E14',
          800: '#12161F',
          700: '#171C27',
          600: '#1D2330',
          500: '#232838',
          400: '#323A4E',
        },
        ink: {
          100: '#EDEFF4',
          300: '#B7BDCC',
          500: '#8B93A7',
          700: '#5A6178',
        },
        signal: {
          violet: '#7C5CFC',
          violetDim: '#5C43C9',
          teal: '#22D3B8',
          coral: '#FF8A5B',
          amber: '#F5B84C',
          rose: '#FF6B8B',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,92,252,0.15), 0 8px 40px -8px rgba(124,92,252,0.25)',
        card: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 12px 32px -16px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        aurora: 'radial-gradient(60% 60% at 20% 20%, rgba(124,92,252,0.20) 0%, transparent 60%), radial-gradient(50% 50% at 80% 0%, rgba(34,211,184,0.14) 0%, transparent 60%)',
        'grid-fade': 'linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
