// import styles from './LangSwapper.module.css'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import Dropdown from 'components/ui/Dropdown/Dropdown'

const LangSwapper = () => {
	const [cookie, setCookie] = useCookies<
		'NEXT_LOCALE',
		{ NEXT_LOCALE: string }
	>(['NEXT_LOCALE'])

	const { pathname, push, locale, locales } = useRouter()

	const switchLanguage = (locale: string) => {
		push(pathname, undefined, { locale, scroll: false })
		if (cookie.NEXT_LOCALE !== locale)
			setCookie('NEXT_LOCALE', locale, { path: '/' })
	}

	if (!locales || !locale) return null

	return (
		<Dropdown
			options={locales}
			defaultOption={locale}
			handler={switchLanguage}
		/>
	)
}

export default LangSwapper
