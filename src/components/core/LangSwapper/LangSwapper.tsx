// import styles from './LangSwapper.module.css'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { ChangeEventHandler } from 'react'
import { useCookies } from 'react-cookie'

const LangSwapper = () => {
	const [cookie, setCookie] = useCookies<
		'NEXT_LOCALE',
		{ NEXT_LOCALE: string }
	>(['NEXT_LOCALE'])

	const { lang } = useTranslation()
	const { pathname, push } = useRouter()

	const switchLanguage: ChangeEventHandler<HTMLSelectElement> = (e) => {
		const locale = e.target.value
		push(pathname, undefined, { locale })
		if (cookie.NEXT_LOCALE !== lang) setCookie('NEXT_LOCALE', locale)
	}

	return (
		<select onChange={switchLanguage} defaultValue={lang}>
			<option value="en">EN</option>
			<option value="es">ES</option>
		</select>
	)
}

export default LangSwapper
