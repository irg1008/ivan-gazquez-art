import styles from './Footer.module.css'
import confetti from 'canvas-confetti'
import useScrollPosition from 'hooks/useScrollPosition'
import { useState } from 'react'
import Social from 'components/ui/Social'

const useConfetti = () => {
	const [fired, setFired] = useState(false)
	const { isBottom } = useScrollPosition()
	if (fired) return

	const count = 200
	const defaults = {
		origin: { y: 0.9 },
	}

	const fire = (particleRatio: number, opts: confetti.Options) => {
		confetti(
			Object.assign({}, defaults, opts, {
				particleCount: Math.floor(count * particleRatio),
			})
		)
	}

	const fireConfetti = () => {
		fire(0.25, {
			spread: 26,
			startVelocity: 55,
		})
		fire(0.2, {
			spread: 60,
		})
		fire(0.35, {
			spread: 100,
			decay: 0.91,
			scalar: 0.8,
		})
		fire(0.1, {
			spread: 120,
			startVelocity: 25,
			decay: 0.92,
			scalar: 1.2,
		})
		fire(0.1, {
			spread: 120,
			startVelocity: 45,
		})
		setFired(true)
	}

	if (isBottom) fireConfetti()
}

const Footer = () => {
	useConfetti()
	return (
		<footer className={styles.footer}>
			<Social />
			<div className={styles.name_wrapper}>
				<span />
				<h3 className={styles.name}>
					IVÁN RUIZ GÁZQUEZ - {new Date().getFullYear()}
				</h3>
				<span />
			</div>
		</footer>
	)
}

export default Footer
