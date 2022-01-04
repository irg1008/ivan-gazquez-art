import Head from 'components/meta/Head'
import { NextPageWithLayout } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import styles from 'styles/404.module.css'
import { BiConfused } from 'react-icons/bi'
import ErrorLayout from 'layout/Error'
import { motion, Variant, Variants } from 'framer-motion'

interface CustomVariants extends Variants {
	init: Variant
	anim: Variant
}

const Custom: NextPageWithLayout = () => {
	const { t } = useTranslation()
	const { asPath: path, push } = useRouter()

	const goHome = () => push('/')
	const notFoundTitle = `${t('error:not-found-title')}: ${path}`

	// Spring styles.
	const customVariants: CustomVariants = {
		init: {
			scale: 1,
			scaleX: -1,
			y: -200,
		},
		anim: {
			scale: 1.05,
			scaleX: -1,
			y: -220,
		},
	}

	const code = 404

	return (
		<>
			<Head title={notFoundTitle} />
			<section className={styles.wrapper}>
				<h1 className={styles.code}>{code}</h1>
				<h2>
					{t('error:not-found')}: <strong>{path}</strong>
				</h2>
				<motion.span
					initial="init"
					animate="anim"
					variants={customVariants}
					className={styles.confused}
					transition={{
						repeat: Infinity,
						repeatType: 'mirror',
						type: 'tween',
						duration: 1,
					}}
				>
					<BiConfused className={styles.icon} />
				</motion.span>
				<button type="button" className={styles.go_home} onClick={goHome}>
					{t('error:go-home')}
				</button>
			</section>
		</>
	)
}

Custom.Layout = ErrorLayout
export default Custom
