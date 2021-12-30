import type { NextPageWithLayout } from 'next'
import Head from 'components/meta/Head'
import useTranslation from 'next-translate/useTranslation'
import MarqueeSlider from 'components/ui/MarqueeSlider'
// import styles from "styles/Home.module.css"

const Home: NextPageWithLayout = () => {
	const { t } = useTranslation()
	return (
		<>
			<Head
				title={t('home:meta-title')}
				description={t('home:meta-description')}
			/>
			<h1>{t('common:title')}</h1>
			<h2>{t('common:subtitle')}</h2>
			<div className="inline" role="group">
				<button
					title="a"
					type="button"
					role="group"
					className="border-2 border-light"
				>
					a
				</button>
				<button
					title="b"
					type="button"
					role="group"
					className="border-2 border-light"
				>
					b
				</button>
				<button
					title="c"
					type="button"
					role="group"
					className="border-2 border-light"
				>
					c
				</button>
			</div>
			<MarqueeSlider />
		</>
	)
}

export default Home
