/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // === CUSTOMIZE THESE ===
        // Core palette: softer dark base with a pink tint
        bg:        '#12101c',     // soft dark background
        surface:   '#191826',     // polished card surface
        border:    '#2c2a3b',     // subtle borders
        muted:     '#4a455c',     // disabled / placeholder
        cream:     '#f4ede7',     // primary text
        soft:      '#c7bab1',     // secondary text
        hint:      '#8f8680',     // tertiary text / labels
        rose:      '#ecb0a5',     // warm pink accent
        blush:     '#d48c7c',     // deeper rose
        sage:      '#8aaa8c',     // secondary accent — calm/nature
        gold:      '#c9a96e',     // highlight / special moments
        code:      '#7b9ea8',     // data science / terminal blue-grey
      },
      fontFamily: {
        // Cinematic serif for emotional sections
        display:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
        // Clean sans for body
        body:     ['"DM Sans"', 'sans-serif'],
        // Monospace for DS / terminal sections
        mono:     ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-up':      'fadeUp 0.8s ease forwards',
        'fade-in':      'fadeIn 1s ease forwards',
        'blink':        'blink 1s step-end infinite',
        'float':        'float 6s ease-in-out infinite',
        'glow-pulse':   'glowPulse 3s ease-in-out infinite',
        'slide-right':  'slideRight 0.6s ease forwards',
        'letter-reveal':'letterReveal 1.2s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(232, 165, 152, 0.15)' },
          '50%':      { boxShadow: '0 0 40px rgba(232, 165, 152, 0.35)' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        letterReveal: {
          '0%':   { opacity: '0', transform: 'translateY(20px)', filter: 'blur(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
}
