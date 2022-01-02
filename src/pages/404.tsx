import Head from 'components/meta/Head'
import { NextPageWithLayout } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import styles from 'styles/404.module.css'
import { BiConfused } from 'react-icons/bi'
import ErrorLayout from 'layout/Error'
import { useSpring, animated, config } from '@react-spring/web'

const Custom: NextPageWithLayout = () => {
	const { t } = useTranslation()
	const { asPath: path, push } = useRouter()

	const goHome = () => push('/')
	const notFoundTitle = `${t('error:not-found-title')}: ${path}`

	// Spring styles.
	const springStyles = useSpring({
		loop: { reverse: true },
		from: {
			transform: 'translateY(-50%) scale(100%) scaleX(-1)',
		},
		to: {
			transform: 'translateY(-50%) scale(105%) scaleX(-1)',
		},
		config: { duration: 800, ...config.stiff },
	})

	return (
		<>
			<Head title={notFoundTitle} />
			<section className={styles.wrapper}>
				<h1 className={styles.code}>404</h1>
				<h2>
					{t('error:not-found')}: <strong>{path}</strong>
				</h2>
				<animated.span style={springStyles} className={styles.confused}>
					<BiConfused className={styles.icon} />
				</animated.span>
				<button type="button" className={styles.go_home} onClick={goHome}>
					{t('error:go-home')}
				</button>
			</section>
		</>
	)
}

Custom.Layout = ErrorLayout
export default Custom
