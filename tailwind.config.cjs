/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sortdecai: ['Sortdecai Wild'],
				swistblnk: ['Swistblnk Monthoers'],
				quicksand: ['Quicksand Dash']
			},
			fontSize: {
				title: 'calc(6rem + 5vw)',
				subtitle: 'calc(1.5rem + 2vw)',
				logo: 'calc(2rem + 1vw)'
			},
			colors: {
				// 'old-lace': '#F7EDDB',
				// 'dark-olive-green': '#606C38',
				// 'kombu-green': '#283618',
				// 'earth-yellow': '#DDA15E',
				// 'liver-dogs': '#BC6C25',
				primary: '#BC6C25',
				secondary: '#606C38',
				background: '#F7EDDB',
				raisin: '#100818'
			},
			screens: {
				tablet: '640px',
				desktop: '1024px',
				widescreen: '2560px'
			}
		}
	},
	plugins: []
};
