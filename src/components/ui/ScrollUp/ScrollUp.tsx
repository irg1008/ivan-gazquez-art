import styles from './ScrollUp.module.css'

const ScrollUp = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<div className={styles.wrapper} onClick={scrollToTop}>
			ScrollTop
		</div>
	)
}

export default ScrollUp
