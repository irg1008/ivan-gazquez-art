import {
	SiFigma,
	SiGoogletagmanager,
	SiNextdotjs,
	SiOpenai,
	SiVercel,
	SiWeb3Dotjs,
	SiWebcomponentsdotorg,
} from 'react-icons/si'
import styles from './Bubbles.module.css'
import { motion, Variant, Variants } from 'framer-motion'

type Bubble = {
	icon: React.ReactNode
	title: string
}

type CustomVairnats = Variants & {
	hidden: Variant
	show: Variant
}

const wrapperVariant: CustomVairnats = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.6,
			delayChildren: 0.2,
			type: 'spring',
		},
	},
}

const bubbleVariant: CustomVairnats = {
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

const Bubbles = () => {
	return (
		<motion.div
			className={styles.bubbles}
			variants={wrapperVariant}
			initial="hidden"
			animate="show"
		>
			{bubbles.map(({ icon, title }) => (
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
	)
}

const bubbles: Bubble[] = [
	{
		icon: <SiGoogletagmanager />,
		title: 'SEO',
	},
	{
		icon: <SiWeb3Dotjs />,
		title: 'Web3',
	},
	{
		icon: <SiWebcomponentsdotorg />,
		title: 'Web Components',
	},
	{
		icon: <SiFigma />,
		title: 'UI/UX',
	},
	{
		icon: <SiOpenai />,
		title: 'AI',
	},
	{
		icon: <SiNextdotjs />,
		title: 'SSR',
	},
	{
		icon: <SiVercel />,
		title: 'Edge Functions',
	},
]

export default Bubbles
