import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nesler.dev',
  integrations: [tailwind(), sitemap()],
  build: {
    assets: '_assets',
    format: 'file',
  },
});
