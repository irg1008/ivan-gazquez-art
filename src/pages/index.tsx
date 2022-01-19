import Head from 'components/meta/Head'
import useTranslation from 'next-translate/useTranslation'
import Hero from 'components/core/Hero'
import MarqueeSlider from 'components/ui/MarqueeSlider'
// import styles from 'styles/Dev.module.css'

const Home = () => {
	const { t } = useTranslation()

	return (
		<>
			<Head
				title={t('dev:meta-title')}
				description={t('dev:meta-description')}
			/>
			<Hero />
			<MarqueeSlider />
		</>
	)
}

export default Home
