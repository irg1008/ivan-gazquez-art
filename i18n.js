module.exports = {
	locales: ['en', 'es'],
	defaultLocale: 'en',
	pages: {
		'*': ['common'],
		'/': ['home'],
	},
	loadLocaleFrom: (lang, ns) =>
		import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
}
