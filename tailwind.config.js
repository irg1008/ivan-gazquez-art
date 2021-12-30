const themes = require('./theme.config.js')
const themeSwapper = require('tailwindcss-theme-swapper')
const typography = require('@tailwindcss/typography')

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	options: {
		safelist: [],
	},
	theme: {
		extend: {
			animation: {
				marquee: 'marquee 60s linear infinite',
			},
			keyframes: {
				marquee: {
					'0%': {
						transform: 'translateX(0)',
					},
					'100%': {
						transform: 'translateX(-100%)',
					},
				},
			},
		},
	},
	darkMode: 'prefers-color-scheme',
	plugins: [themeSwapper(themes), typography()],
}
