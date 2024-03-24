import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{astro,html,mdx,ts}'],
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
    },
  },
  plugins: [],
} satisfies Config;
