import { sveltekit } from '@sveltejs/kit/vite';
import { VitePluginFonts } from 'vite-plugin-fonts';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()]
	// 	VitePluginFonts({
	// 		custom: {
	// 			families: [
	// 				{
	// 					name: 'Sortdecai Wild',
	// 					local: 'Sortdecai Wild',
	// 					src: './static/fonts/*.woff'
	// 				},
	// 				{
	// 					name: 'Swistblnk Monthoers',
	// 					local: 'Swistblnk Monthoers',
	// 					src: './static/fonts/*.woff'
	// 				}
	// 			],

	// 			display: 'auto',
	// 			preload: true,
	// 			injectTo: 'head'
	// 		}
	// 	})
	// ],

	// server: {
	// 	fs: {
	// 		allow: ['/static/fonts']
	// 	}
	// }
};

export default config;
