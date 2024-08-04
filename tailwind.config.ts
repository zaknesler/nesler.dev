import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,mdx,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: colors.blue,
        gray: colors.slate,
      },
      maxWidth: {
        sidebar: '10rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
