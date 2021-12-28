import styles from './LangSwapper.module.css'
import { useRouter } from 'next/router'
import { ChangeEventHandler } from 'react'
import { useCookies } from 'react-cookie'

const LangSwapper = () => {
	const [cookie, setCookie] = useCookies<
		'NEXT_LOCALE',
		{ NEXT_LOCALE: string }
	>(['NEXT_LOCALE'])

	const { pathname, push, locale, locales } = useRouter()

	const switchLanguage: ChangeEventHandler<HTMLSelectElement> = (e) => {
		const locale = e.target.value
		push(pathname, undefined, { locale })
		if (cookie.NEXT_LOCALE !== locale)
			setCookie('NEXT_LOCALE', locale, { path: '/' })
	}

	return (
		<select
			onChange={switchLanguage}
			defaultValue={locale}
			className={styles.locale}
		>
			{locales?.map((l) => (
				<option key={l} value={l}>
					{l}
				</option>
			))}
		</select>
	)
}

export default LangSwapper
