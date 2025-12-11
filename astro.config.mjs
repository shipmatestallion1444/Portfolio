// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://benehasler.dev',
	integrations: [mdx(), sitemap()],
	redirects: {
		"/eppendorf": "https://www.eppendorf.com/us-en"
	}
});

