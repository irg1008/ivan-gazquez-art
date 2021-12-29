import styles from './ThemeSwapper.module.css'
import useTheme from 'stores/theme'

const ThemeSwapper = () => {
	const { themes, setTheme } = useTheme()

	return (
		<div className={styles.wrapper}>
			{themes.map((theme) => (
				<button
					key={theme}
					className={styles.theme_button}
					onClick={() => setTheme(theme)}
				>
					{theme}
				</button>
			))}
		</div>
	)
}

export default ThemeSwapper
