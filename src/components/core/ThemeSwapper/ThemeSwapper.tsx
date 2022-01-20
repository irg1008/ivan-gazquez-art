// import styles from './ThemeSwapper.module.css'
import useTheme, { Theme } from 'contexts/theme'
import useTranslation from 'next-translate/useTranslation'
import { HiSun, HiMoon } from 'react-icons/hi'
import Toggle from 'components/ui/Toggle'
import Loading from 'components/ui/Loading'
import useLoaded from 'hooks/useLoaded'

const ThemeIcons: Record<Theme, JSX.Element> = {
	light: <HiSun />,
	dark: <HiMoon />,
}

const ThemeSwapper = () => {
	const { loaded } = useLoaded()
	const { t } = useTranslation('common')

	// Theme hook.
	const { themes, toggleTheme, theme } = useTheme()

	// All themes.
	const themesKeys = themes.map((theme) => theme as string)

	const placeHolders = themes.map((theme, i) => (
		<span
			key={i}
			title={t('common:theme.set', { theme: t(`common:theme.${theme}`) })}
		>
			{ThemeIcons[theme]}
		</span>
	))

	if (!loaded) return <Loading />

	return (
		<Toggle
			options={themesKeys}
			placeholders={placeHolders}
			selected={theme}
			onToggle={toggleTheme}
		/>
	)
}

export default ThemeSwapper
