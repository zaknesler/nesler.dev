import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';
import typography from '@tailwindcss/typography';
import type { PluginUtils } from 'tailwindcss/types/config';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{astro,html,md,mdx,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: colors.blue,
      },
      maxWidth: {
        sidebar: '10rem',
      },
      typography: ({ theme }: PluginUtils) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
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
                color: theme('colors.gray.900'),
                fontWeight: theme('fontWeight.semibold'),
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: theme('fontWeight.semibold'),
              color: theme('colors.gray.900'),
            },
            hr: {
              borderTopWidth: '0.125rem',
              borderColor: theme('colors.gray.200'),
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
            color: theme('colors.gray.100'),
            strong: {
              fontWeight: theme('fontWeight.semibold'),
              color: theme('colors.gray.100'),
            },
            a: {
              color: theme('colors.gray.100'),
              fontWeight: theme('fontWeight.semibold'),
              '&:hover': {
                color: theme('colors.white'),
              },
            },
            p: {
              a: {
                color: theme('colors.gray.100'),
                fontWeight: theme('fontWeight.semibold'),
                '&:hover': {
                  color: theme('colors.white'),
                },
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: theme('fontWeight.semibold'),
              color: theme('colors.gray.100'),
            },
            hr: {
              borderTopWidth: '0.125rem',
              borderColor: theme('colors.gray.600'),
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
  plugins: [
    typography(),
    plugin(({ addBase, theme }) => {
      addBase({
        hr: {
          borderTopWidth: '0.125rem',
          borderColor: theme('colors.gray.200'),
        },
        '@media (prefers-color-scheme: dark)': {
          hr: {
            borderColor: theme('colors.gray.600'),
          },
        },
      });
    }),
  ],
} satisfies Config;
