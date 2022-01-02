import Head from 'components/meta/Head'
import { NextPageWithLayout } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import styles from 'styles/404.module.css'
import { BiConfused } from 'react-icons/bi'

const Custom: NextPageWithLayout = () => {
	const { t } = useTranslation()
	const { asPath: path, push } = useRouter()

	const goHome = () => push('/')

	const notFoundTitle = `${t('error:not-found-title')}: ${path}`

	return (
		<>
			<Head title={notFoundTitle} />
			<section className={styles.wrapper}>
				<h1 className={styles.code}>404</h1>
				<h2>
					{t('error:not-found')}: <strong>{path}</strong>
				</h2>
				<BiConfused className={styles.confused} />
				<button type="button" className={styles.go_home} onClick={goHome}>
					{t('error:go-home')}
				</button>
			</section>
		</>
	)
}

export default Custom
