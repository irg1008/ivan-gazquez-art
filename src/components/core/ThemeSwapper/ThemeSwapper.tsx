// import styles from './ThemeSwapper.module.css'
import useTheme from 'stores/theme'
import Dropdown from 'components/ui/Dropdown/Dropdown'

const ThemeSwapper = () => {
	const { themes, setTheme, theme } = useTheme()
	const themesStrings = themes.map((theme) => theme.toString())
	return (
		<Dropdown
			options={themesStrings}
			defaultOption={theme.toString()}
			handler={(themeString) => setTheme(themeString as typeof theme)}
		/>
	)
}

export default ThemeSwapper
