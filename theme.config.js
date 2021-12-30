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
				backgroundColor: {
					primary: lightPrimary[700],
					secondary: lightPrimary[400],
					tertiary: lightPrimary[300],
				},
				textColor: {
					primary: lightPrimary[50],
					secondary: lightPrimary[700],
					tertiary: lightPrimary[900],
				},
				colors: {
					lighter: lightTheme[100],
					light: lightTheme[300],
					medium: lightTheme[400],
					dark: lightTheme[700],
					darker: lightTheme[900],
					primary: lightPrimary[700],
					secondary: lightPrimary[400],
					tertiary: lightPrimary[300],
				},
				boxShadowColor: {
					// Moved to color becaus eopacity not working
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
				backgroundColor: {
					primary: darkPrimary[500],
					secondary: darkPrimary[800],
					tertiary: darkPrimary[300],
				},
				textColor: {
					primary: darkPrimary[50],
					secondary: darkPrimary[700],
					tertiary: darkPrimary[900],
				},
				colors: {
					lighter: darkTheme[900],
					light: darkTheme[700],
					medium: darkTheme[500],
					dark: darkTheme[300],
					darker: darkTheme[100],
					primary: darkPrimary[400],
					secondary: darkPrimary[700],
					tertiary: darkPrimary[900],
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
