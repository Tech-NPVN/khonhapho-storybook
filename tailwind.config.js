/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        primaryColorLight: '#ffffff',
        primaryButtonLight: '#197D16',
        primaryButtonHoverLight: '#188C15',
        textPrimaryLight: '#000',
        textSecondaryLight: 'rgba(0, 0, 0, 0.5)',
        secondaryColorLight: '#ffffff',
        tertiaryColorLight: 'rgba(14, 24, 28, 0.8)',
        dividerLight: '#d9d9d9',
        infoLight: '#1677ff',
        errorLight: '#f87272',
        successLight: '#36d399',
        warningLight: '#fbbd23',
        linkLight: '#307ce0',
        linkHoverLight: '#65A5FF',
        primaryColorDark: '#242526',
        primaryButtonDark: '#197D16',
        primaryButtonHoverDark: '#188C15',
        textPrimaryDark: '#ffffff',
        textSecondaryDark: '#6B6C6D',
        secondaryColorDark: '#3A3B3C',
        tertiaryColorDark: '#ffffff',
        dividerDark: '#6B6C6D',
        infoDark: '#1677ff',
        errorDark: '#ff4d4f',
        successDark: '#36d399',
        warningDark: '#fbbd23',
        linkDark: '#69C3F4',
        linkHoverDark: '#A2DEFF',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-1rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '100%': { opacity: '1', transform: 'translateY(0)' },
          '0%': { opacity: '0', transform: 'translateY(-1rem)' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-in-out forwards',
        slideUp: 'slideUp 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
