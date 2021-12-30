module.exports = {
	locales: ['en', 'es'],
	defaultLocale: 'en',
	pages: {
		'*': ['common'],
		'/': ['home'],
	},
	loadLocaleFrom: (lang, ns) =>
		import(`./src/i18n/${lang}/${ns}.json`).then((m) => m.default),
}
