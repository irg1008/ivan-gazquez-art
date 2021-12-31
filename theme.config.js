const {
	neutral: darkTheme,
	neutral: lightTheme,
	rose: darkPrimary,
	sky: lightPrimary,
} = require('tailwindcss/colors')

const themeConfig = {
	themes: [
		{
			name: 'base',
			selectors: [':root', '.light'],
			theme: {
				colors: {
					lighter: lightTheme[100],
					light: lightTheme[300],
					medium: lightTheme[400],
					dark: lightTheme[700],
					darker: lightTheme[900],
					prim: lightPrimary[700],
					sec: lightPrimary[400],
					tert: lightPrimary[300],
				},
				borderRadius: {
					custom: '9999px',
				},
				borderWidth: {
					button: '2px',
				},
				borderColor: {
					button: darkTheme[600],
				},
			},
		},
		{
			name: 'dark',
			selectors: ['.dark'],
			theme: {
				colors: {
					lighter: darkTheme[900],
					light: darkTheme[700],
					medium: darkTheme[500],
					dark: darkTheme[300],
					darker: darkTheme[100],
					prim: darkPrimary[400],
					sec: darkPrimary[700],
					tert: darkPrimary[900],
				},
				boxShadowColor: {},
				borderRadius: {
					custom: '9999px',
				},
				borderWidth: {
					button: '2px',
				},
				borderColor: {
					button: darkTheme[400],
				},
			},
		},
	],
}

module.exports = themeConfig
