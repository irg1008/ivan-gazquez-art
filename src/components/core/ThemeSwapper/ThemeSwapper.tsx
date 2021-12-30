import styles from './ThemeSwapper.module.css'
import useTheme from 'stores/theme'

const ThemeSwapper = () => {
	const { toggleTheme } = useTheme()

	return (
		<div className={styles.wrapper}>
			<button className={styles.theme_button} onClick={toggleTheme}>
				Toggle Theme
			</button>
		</div>
	)
}

export default ThemeSwapper
