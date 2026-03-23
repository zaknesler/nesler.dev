import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://nesler.dev',
	output: 'static',
	integrations: [
		sitemap({
			filter: page => !page.includes('resume'),
			lastmod: new Date()
		})
	],
	vite: {
		plugins: [tailwindcss()]
	},
	build: {
		assets: '_assets',
		format: 'file'
	},
	experimental: {
		rustCompiler: true
	}
});
