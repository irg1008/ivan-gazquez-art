// import styles from './ThemeSwapper.module.css'
import useTheme from 'stores/theme'
import Dropdown from 'components/ui/Dropdown/Dropdown'
import useTranslation from 'next-translate/useTranslation'

const ThemeSwapper = () => {
	const { t } = useTranslation('common')

	// Theme hook.
	const { themes, setTheme, theme } = useTheme()

	// Active theme.
	const themeString = t(`common:theme.${theme}`)

	// All themes.
	const themesOptions = themes.map((theme) => t(`common:theme.${theme}`))
	const themesKeys = themes.map((theme) => theme as string)

	// Handler.
	const handleThemeChange = (themeString: string) =>
		setTheme(themeString as typeof theme)

	return (
		<Dropdown
			keyValues={themesKeys}
			options={themesOptions}
			defaultOption={themeString}
			handler={handleThemeChange}
		/>
	)
}

export default ThemeSwapper
