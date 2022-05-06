import Globe from 'components/ui/Globe'
import { motion, Variant, Variants } from 'framer-motion'
import React from 'react'
import styles from './Timeline.module.css'
import { MdLocationOn, MdOutlineWork } from 'react-icons/md'
import { IoIosSchool } from 'react-icons/io'
import { Status, events, TimelineEvent } from 'lib/knowledge/about/timeline'
import useTranslation from 'next-translate/useTranslation'

type CustomVariants = Variants & {
	hidden: Variant
	show: Variant
}

const linesVariant: CustomVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.2,
			type: 'spring',
		},
	},
}

const lineVariant: CustomVariants = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			duration: 0.5,
		},
	},
}

const timeline = `${styles.timeline} backdrop-blur firefox:bg-opacity-90`

const Timeline = () => {
	const { t } = useTranslation()

	return (
		<div className={styles.wrapper}>
			<motion.ul
				variants={linesVariant}
				initial="hidden"
				whileInView="show"
				className={timeline}
			>
				{events.map(({ id, starting, ending, status }) => (
					<Element key={id}>
						<Location loc={t(`about:timeline.events.${id}.place`)} />
						<Year starting={starting} ending={ending} />
						<p className={styles.description}>
							{t(`about:timeline.events.${id}.description`)}
						</p>
						<BG status={status} />
					</Element>
				))}
			</motion.ul>
			<div className={styles.globe_wrapper}>
				<div className={styles.globe}>
					<Globe />
				</div>
			</div>
		</div>
	)
}

const pills: Record<Status, JSX.Element> = {
	studying: <IoIosSchool />,
	working: <MdOutlineWork />,
}

const BG = ({ status }: { status: Status }) => {
	return <div className={styles.pill}>{pills[status]}</div>
}

const Element = ({ children }: { children: React.ReactNode }) => (
	<motion.li variants={lineVariant}>{children}</motion.li>
)

const Location = ({ loc }: { loc: string }) => (
	<div className={styles.loc}>
		<span className={styles.icon}>
			<MdLocationOn size={25} />
		</span>
		{loc}
	</div>
)

type YearProps = Pick<TimelineEvent, 'starting' | 'ending'>

const Year = ({ starting, ending }: YearProps) => {
	const { t } = useTranslation()

	const currentDate = ending === 'present' ? new Date() : ending
	const years = currentDate.getFullYear() - starting.getFullYear()
	const endingTranslation =
		ending === 'present'
			? t('about:timeline.present')
			: t('about:timeline.date', { date: ending })

	return (
		<div className={styles.year}>
			{t('about:timeline.years', { count: years })} •{' '}
			{t('about:timeline.date', { date: starting })} - {endingTranslation}
		</div>
	)
}

export default Timeline
