const themes = require('./theme.config.js')
const themeSwapper = require('tailwindcss-theme-swapper')

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	options: {
		safelist: [],
	},
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [themeSwapper(themes)],
}
