module.exports = {
	locales: ['en', 'es'],
	defaultLocale: 'en',
	pages: {
		'*': ['common', 'error'],
		'/': ['dev'],
		'/design': ['design'],
		'/about': ['about'],
	},
	loadLocaleFrom: (lang, ns) =>
		import(`./src/i18n/${lang}/${ns}.json`).then((m) => m.default),
}
