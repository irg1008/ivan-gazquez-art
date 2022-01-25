import styles from './Bubbles.module.css'
import { motion, Variant, Variants } from 'framer-motion'
import { interests } from 'lib/knowledge/about'

type CustomVariants = Variants & {
	hidden: Variant
	show: Variant
}

const wrapperVariant: CustomVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.6,
			delayChildren: 0.2,
			type: 'spring',
		},
	},
}

const bubbleVariant: CustomVariants = {
	hidden: {
		y: 0,
		rotateX: -5,
		rotateY: -5,
		rotateZ: -2,
	},
	show: {
		y: 20,
		rotateX: 5,
		rotateY: 5,
		rotateZ: 2,
		transition: {
			repeat: Infinity,
			repeatType: 'mirror',
			type: 'tween',
			duration: 2,
		},
	},
}

const BubbleBG = () => {
	// const ref = useRef<HTMLDivElement>(null)
	// const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(ref)

	// const rect = ref.current?.getBoundingClientRect()
	// const right = rect?.right ?? 0
	// const top = rect?.top ?? 0

	// console.log({ elX, elY, elW, elH })

	return (
		<motion.div
			className={styles.bubbles_bg}
			// ref={ref}
			// style={{
			// 	rotateX: elX * 0.05,
			// 	rotateY: elY * 0.05,
			// }}
		/>
	)
}

const Bubbles = () => {
	return (
		<>
			<BubbleBG />
			<motion.div
				className={styles.bubbles}
				variants={wrapperVariant}
				initial="hidden"
				animate="show"
			>
				{interests.map(({ icon, title }) => (
					<motion.div
						key={title}
						className={styles.bubble_wrapper}
						variants={bubbleVariant}
					>
						<div className={styles.bubble}>
							<div className={styles.icon_container}>
								<div className={styles.icon}>{icon}</div>
							</div>
							<p className={styles.title}>{title}</p>
						</div>
					</motion.div>
				))}
			</motion.div>
		</>
	)
}

export default Bubbles
