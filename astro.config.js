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
			lastmod: new Date(),
		}),
	],
	vite: {
		resolve: { tsconfigPaths: true },
		plugins: [tailwindcss()],
	},
	server: { port: 4000 },
	preview: { port: 4000 },
	build: {
		assets: '_assets',
		format: 'file',
	},
});
