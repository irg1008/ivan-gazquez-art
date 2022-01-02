const themes = require('./theme.config.js')
const themeSwapper = require('tailwindcss-theme-swapper')
const typography = require('@tailwindcss/typography')

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	options: {},
	theme: {
		extend: {
			animation: {
				marquee: 'marquee 60s linear infinite',
				'up-infinite': 'up 2s ease-in-out infinite',
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
				up: {
					'0%, 80%': {
						transform: 'translateY(0)',
						opacity: 1,
					},
					'85%': {
						transform: 'translateY(-200%)',
						opacity: 0,
					},
					'86%': {
						transform: 'translateY(200%)',
						opacity: 0,
					},
				},
			},
		},
	},
	darkMode: 'class',
	plugins: [themeSwapper(themes), typography()],
}
