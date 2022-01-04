// import styles from './LangSwapper.module.css'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import Dropdown from 'components/ui/Dropdown'

const fullNames: Record<string, string> = {
	en: 'English',
	ru: 'Русский',
	uk: 'Українська',
	es: 'Español',
	de: 'Deutsch',
	fr: 'Français',
	it: 'Italiano',
	pt: 'Português',
	ja: '日本語',
	zh: '中文',
	ko: '한국어',
	ar: 'العربية',
	tr: 'Türkçe',
	he: 'עברית',
	pl: 'Polski',
	id: 'Bahasa Indonesia',
}

const LangSwapper = () => {
	const [cookie, setCookie] = useCookies<
		'NEXT_LOCALE',
		{ NEXT_LOCALE: string }
	>(['NEXT_LOCALE'])

	const { pathname, asPath, push, locale, locales } = useRouter()
	if (!locales || !locale) return null

	const switchLanguage = (locale: string) => {
		push(pathname, asPath, { locale, scroll: false })
		if (cookie.NEXT_LOCALE !== locale)
			setCookie('NEXT_LOCALE', locale, { path: '/' })
	}

	const fullLocales = locales.map((l) => fullNames[l])
	const currentLocale = fullNames[locale]

	return (
		<Dropdown
			options={fullLocales}
			keyValues={locales}
			defaultOption={currentLocale}
			handler={switchLanguage}
		/>
	)
}

export default LangSwapper
