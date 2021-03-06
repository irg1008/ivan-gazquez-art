import styles from './ScrollUp.module.css'
import { BsArrowBarUp } from 'react-icons/bs'
import useTranslation from 'next-translate/useTranslation'
import useScrollPosition from 'hooks/useScrollPosition'
import { AnimatePresence, Variant, Variants, motion } from 'framer-motion'

interface ScrollVariants extends Variants {
	visible: Variant
	hidden: Variant
}

const ScrollUp = () => {
	const { scrollToTop, isTop } = useScrollPosition()
	const { t } = useTranslation()

	const scrollVariants: ScrollVariants = {
		visible: {
			opacity: 1,
			y: 0,
		},
		hidden: {
			opacity: 0,
			y: '100%',
		},
	}

	return (
		<div className={styles.holder}>
			<AnimatePresence initial={false}>
				<motion.div
					initial="hidden"
					animate={isTop ? 'hidden' : 'visible'}
					variants={scrollVariants}
					transition={{ type: 'tween' }}
				>
					<div className={`${styles.wrapper} ${!isTop && styles.floating}`}>
						<span className={styles.icon_container} onClick={scrollToTop}>
							<BsArrowBarUp className={styles.icon} />
						</span>
						<div className={styles.msg_container}>
							<p className={styles.msg}>{t('common:scroll')}</p>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	)
}

export default ScrollUp
