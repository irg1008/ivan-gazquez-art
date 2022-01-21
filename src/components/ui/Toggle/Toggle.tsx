import { useToggle } from 'react-use'
import styles from './Toggle.module.css'
import { motion } from 'framer-motion'

type ToggleProps = {
	onToggle: () => void
	selected: string
	options: string[]
	placeholders?: JSX.Element[]
}

const Toggle = ({ onToggle, selected, options, placeholders }: ToggleProps) => {
	const [isOn, toggleIsOn] = useToggle(selected === options[0])
	const value = (placeholders ?? options)[isOn ? 0 : 1]

	const onClick = () => {
		toggleIsOn()
		onToggle()
	}

	return (
		<motion.div
			className={`${styles.switch} ${isOn && styles.active}`}
			onClick={onClick}
		>
			<motion.div
				layout
				transition={{
					type: 'spring',
					stiffness: 500,
					damping: 30,
				}}
				className={styles.wrapper}
			>
				{value}
			</motion.div>
		</motion.div>
	)
}

export default Toggle
