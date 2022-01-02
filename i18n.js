module.exports = {
	locales: ['en', 'es'],
	defaultLocale: 'en',
	pages: {
		'*': ['common', 'error'],
		'/': ['home'],
		'/about': ['about'],
	},
	loadLocaleFrom: (lang, ns) =>
		import(`./src/i18n/${lang}/${ns}.json`).then((m) => m.default),
}
