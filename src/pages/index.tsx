import type { NextPageWithLayout } from 'next'
import Head from 'components/meta/Head'
import useTranslation from 'next-translate/useTranslation'
// import styles from "styles/Home.module.css"

const Home: NextPageWithLayout = () => {
	const { t } = useTranslation('common')
	return (
		<>
			<Head title="Home" description="Home page" />
			<h1>{t('title')}</h1>
			<h2>{t('subtitle')}</h2>
		</>
	)
}

export default Home
