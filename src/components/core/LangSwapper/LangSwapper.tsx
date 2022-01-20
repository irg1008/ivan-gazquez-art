// import styles from './LangSwapper.module.css'
import { useRouter } from 'next/router'
import { useCookie } from 'react-use'
import Image from 'next/image'
import Options from 'components/ui/Options'

const Flag = (flag: string) => (
	<Image
		src={`/images/flags/${flag}.svg`}
		alt={`${flag} flag`}
		height={'16px'}
		width={'16px'}
	/>
)

const LangSwapper = () => {
	const [cookie, updateCookie] = useCookie('NEXT_LOCALE')

	const { pathname, asPath, push, locale, locales } = useRouter()
	if (!locales || !locale) return null

	const switchLanguage = (locale: string) => {
		push(pathname, asPath, { locale, scroll: false })
		if (cookie !== locale) updateCookie(locale, { path: '/' })
	}

	const flags = locales.map((l) => Flag(l))

	return (
		<Options
			options={locales}
			selected={locale}
			placeholders={flags}
			onOptionChange={switchLanguage}
		/>
	)
}

export default LangSwapper
