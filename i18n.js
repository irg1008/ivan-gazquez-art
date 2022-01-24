const formatters = {
	es: new Intl.NumberFormat('es-ES'),
	en: new Intl.NumberFormat('en-EN'),
}

module.exports = {
	locales: ['en', 'es'],
	defaultLocale: 'en',
	pages: {
		'*': ['common', 'error'],
		'/': ['dev'],
		'/about': ['about'],
	},
	loadLocaleFrom: (lang, ns) =>
		import(`./src/i18n/${lang}/${ns}.json`).then((m) => m.default),
	interpolation: {
		format: (value, format, lang) => {
			if (format === 'number') return formatters[lang].format(value)
			if (format === 'date') return new Date(value).toLocaleDateString(lang)
			return value
		},
	},
}
