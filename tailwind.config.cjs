const defaultTheme = require('tailwindcss/defaultTheme')
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'media',
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
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            strong: {
              fontWeight: theme('fontWeight.semibold'),
            },
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
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: theme('fontWeight.semibold'),
            },
            h4: {
              marginBottom: theme('spacing.3'),
            },
            ul: {
              li: {
                p: {
                  '&:first-child': {
                    marginBottom: `-${theme('spacing.2')}`,
                    a: {
                      fontWeight: theme('fontWeight.semibold'),
                    },
                  },
                },
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.400'),
            strong: {
              fontWeight: theme('fontWeight.semibold'),
              color: theme('colors.gray.200'),
            },
            a: {
              color: theme('colors.gray.200'),
              fontWeight: theme('fontWeight.semibold'),
              '&:hover': {
                color: theme('colors.white'),
              },
            },
            p: {
              a: {
                color: theme('colors.gray.200'),
                fontWeight: theme('fontWeight.medium'),
                '&:hover': {
                  color: theme('colors.white'),
                },
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: theme('fontWeight.semibold'),
              color: theme('colors.gray.200'),
              '& + p': {
                marginTop: '-0.5em',
              },
            },
            h4: {
              marginBottom: theme('spacing.3'),
            },
            ul: {
              li: {
                p: {
                  '&:first-child': {
                    marginBottom: `-${theme('spacing.2')}`,
                    a: {
                      fontWeight: theme('fontWeight.semibold'),
                    },
                  },
                },
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
      display: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          highlight: value => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        },
      )
    }),
  ],
}
