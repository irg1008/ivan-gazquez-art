import styles from './ScrollUp.module.css'
import { BsArrowBarUp } from 'react-icons/bs'
import useTranslation from 'next-translate/useTranslation'
import useScroll from 'hooks/useScroll'
import { Transition } from '@headlessui/react'

const ScrollUp = () => {
	const { scrollToTop, isTop } = useScroll()
	const { t } = useTranslation()

	return (
		<div className={styles.holder}>
			<Transition
				show={!isTop}
				enter="transition-all duration-200 ease-in-out"
				enterFrom="translate-y-full opacity-0"
				enterTo="translate-y-0 opacity-100"
				leave="transition-all duration-200 ease-in-out"
				leaveFrom="translate-y-0 opacity-100"
				leaveTo="translate-y-full opacity-0"
				className={`${styles.wrapper} ${!isTop && styles.floating}`}
			>
				<span className={styles.icon_container} onClick={scrollToTop}>
					<BsArrowBarUp className={styles.icon} />
				</span>
				<div className={styles.msg_container}>
					<p className={styles.msg}>{t('common:scroll')}</p>
				</div>
			</Transition>
		</div>
	)
}

export default ScrollUp
