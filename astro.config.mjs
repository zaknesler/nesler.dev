import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://nesler.dev',
  output: 'hybrid',
  integrations: [tailwind(), sitemap()],
  build: {
    assets: '_assets',
    format: 'file',
  },
  adapter: cloudflare(),
});
