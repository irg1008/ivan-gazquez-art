import styles from './Ham.module.css'
// import { motion } from 'framer-motion'
import { useToggle } from 'react-use'
import { useEffect } from 'react'
import { motion, Transition, Variants } from 'framer-motion'

type HamProps = {
	onToggle: () => void
	className?: string
	toggled: boolean
}

const Ham = ({ toggled, onToggle, className }: HamProps) => {
	const [isOpen, toggleOpen] = useToggle(false)

	useEffect(() => toggleOpen(toggled), [toggled, toggleOpen])

	const handleClick = () => {
		onToggle()
		toggleOpen()
	}

	return (
		<motion.div
			className={`${className} ${styles.wrapper}`}
			onClick={handleClick}
			animate={isOpen ? 'open' : 'closed'}
		>
			<svg
				width="23"
				height="23"
				viewBox="0 0 23 23"
				className="inline"
				stroke="currentColor"
			>
				<Path
					variants={{
						closed: { d: 'M 2 2.5 L 20 2.5' },
						open: { d: 'M 3 16.5 L 17 2.5' },
					}}
				/>
				<Path
					d="M 2 9.423 L 20 9.423"
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={{ duration: 0.1 }}
				/>
				<Path
					variants={{
						closed: { d: 'M 2 16.346 L 20 16.346' },
						open: { d: 'M 3 2.5 L 17 16.346' },
					}}
				/>
			</svg>
		</motion.div>
	)
}

type PathProps = {
	d?: string
	variants: Variants
	transition?: Transition
}

const Path = (props: PathProps) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="currentColor"
		strokeLinecap="round"
		{...props}
	/>
)

export default Ham
