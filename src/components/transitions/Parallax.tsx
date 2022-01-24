import {
	motion,
	Variants,
	Variant,
	useViewportScroll,
	useTransform,
	useSpring,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export type ParallaxVariants = Variants & {
	outside: Variant
	inside: Variant
}

type ParallaxProps = {
	offsetY?: number
	triggerPoint?: number
	fadeOut?: boolean
	spring?: boolean
	children: React.ReactNode
}

const Parallax = ({
	offsetY = 600,
	triggerPoint = 0.1,
	spring = false,
	children,
}: ParallaxProps) => {
	const { scrollY } = useViewportScroll()
	const ref = useRef<HTMLDivElement>(null)
	const [elementTop, setElementTop] = useState(0)
	const [scrollOffset, setScrollOffset] = useState(0)
	const [clientHeight, setClientHeight] = useState(0)

	useEffect(() => {
		const setValues = () => {
			if (!ref.current) return

			const offset = offsetY / (ref.current.clientHeight / 100)
			setScrollOffset(-offset)
			setElementTop(ref.current.offsetTop)
			setClientHeight(window.innerHeight)
		}

		setValues()
		window.addEventListener('resize', setValues)

		return () => window.removeEventListener('resize', setValues)
	}, [ref, offsetY])

	const transformInitialValue = elementTop + offsetY
	const transformFinalValue = elementTop - clientHeight * triggerPoint

	const yRange = [transformInitialValue, transformFinalValue]

	const y = useTransform(scrollY, yRange, [`${scrollOffset}%`, '0%'])
	const ySpring = useSpring(y, { stiffness: 400, damping: 90 })

	return (
		<motion.div
			ref={ref}
			initial={{ y: 0 }}
			style={{ y: spring ? ySpring : y }}
		>
			{children}
		</motion.div>
	)
}

export { Parallax }
