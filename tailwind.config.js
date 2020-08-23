const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.{js,jsx}', './pages/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#2f9fed',
          500: '#2f4fed',
          600: '#1732b8',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: theme => ({
        outline: `0 0 0 3px ${theme('colors.brand.500')}60`,
      }),
      spacing: {
        sidebar: '10rem',
      },
    },
    typography: theme => ({
      default: {
        css: {
          color: theme('colors.gray.700'),
          a: {
            color: theme('colors.gray.900'),
            fontWeight: theme('fontWeight.semibold'),
            '&:hover': {
              color: theme('colors.black'),
            },
          },
          p: {
            a: {
              color: theme('colors.gray.800'),
              fontWeight: theme('fontWeight.medium'),
            },
          },
          h4: {
            marginBottom: theme('spacing.3'),
          },
          'ul > li p': {
            marginTop: theme('spacing.1'),
          },
        },
      },
    }),
  },
  plugins: [require('@tailwindcss/typography')],
  variants: {
    typography: [],
  },
}
