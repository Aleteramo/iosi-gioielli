import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#000000',
        'light': '#FFFFFF',
        'accent': '#FF0000',
        'dark-gray': '#1A1A1A',
        'medium-gray': '#333333',
        'light-gray': '#666666',
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'code': ['Fira Code', 'monospace'],
      },
      spacing: {
        '128': '32rem',
      },
      height: {
        'hero': 'calc(100vh - 4rem)',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)',
        'gradient-subtle': 'linear-gradient(180deg, rgba(26,26,26,0.8) 0%, #000000 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
