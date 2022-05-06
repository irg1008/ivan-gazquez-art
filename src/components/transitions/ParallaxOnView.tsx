import { motion, Transition } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ParallaxVariants } from './Parallax'

export type ParallaxOnViewProps = {
	children: React.ReactNode
	variants: ParallaxVariants
	triggerOnce?: boolean
	transition?: Transition
}

const ParallaxOnView = ({
	children,
	triggerOnce = false,
	variants,
	transition,
}: ParallaxOnViewProps) => {
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce,
	})

	return (
		<motion.div
			variants={variants}
			animate={inView ? 'inside' : 'outside'}
			transition={transition ?? { duration: 0.5, ease: 'easeOut' }}
			ref={ref}
		>
			{children}
		</motion.div>
	)
}

export default ParallaxOnView
