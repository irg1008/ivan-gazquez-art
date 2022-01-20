import styles from './Tooltip.module.css'
import { useFloating, shift, flip, offset, arrow } from '@floating-ui/react-dom'
import { useHover } from 'react-use'
import { useRef } from 'react'
import {
	motion,
	AnimatePresence,
	Variant,
	Variants,
	Transition,
} from 'framer-motion'

type TooltipProps = {
	children: React.ReactNode
	tooltipText: string
}

interface CustomVariants extends Variants {
	visible: Variant
	hidden: Variant
}

const tooltipVariants: CustomVariants = {
	hidden: {
		opacity: 0,
		scale: 0.9,
	},
	visible: {
		opacity: 1,
		scale: 1,
	},
}

const transition: Transition = { type: 'spring', delay: 0.1 }

const Tooltip = ({ children, tooltipText }: TooltipProps) => {
	const arrowRef = useRef<HTMLDivElement>(null)
	const { x, y, reference, strategy, floating } = useFloating({
		placement: 'top',
		middleware: [shift(), flip(), offset(15), arrow({ element: arrowRef })],
	})

	const child = () => <span ref={reference}>{children}</span>
	const [hoverable, hovered] = useHover(child)

	return (
		<>
			{hoverable}
			<AnimatePresence>
				{hovered && (
					<motion.div
						variants={tooltipVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						transition={transition}
						className={styles.tooltip}
						ref={floating}
						style={{
							position: strategy,
							top: y ?? '',
							left: x ?? '',
						}}
					>
						{tooltipText}
						<div className={styles.arrow} ref={arrowRef} />
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

export default Tooltip
