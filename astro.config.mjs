import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://nesler.dev',
  output: 'hybrid',
  integrations: [
    tailwind(),
    sitemap({
      filter: page => !page.includes('resume'),
      lastmod: new Date(),
    }),
  ],
  build: {
    assets: '_assets',
    format: 'file',
  },
  adapter: cloudflare(),
});
