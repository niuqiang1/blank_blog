import astroRemark from '@astrojs/markdown-remark';
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig(
	/** @type {import('astro').AstroUserConfig} */
	{
		// experimental: {
		// 	assets: true
		// },
		markdown: {
			render: [astroRemark, {
				remarkPlugins: [],
				rehypePlugins: ['rehype-slug', ['rehype-autolink-headings', {
					behavior: 'wrap'
				}]],
				shikiConfig: {
					theme: 'poimandres',
					langs: [],
					wrap: false
				}
			}]
		},
		
	});