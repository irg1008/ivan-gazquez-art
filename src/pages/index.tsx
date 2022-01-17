import Head from 'components/meta/Head'
import useTranslation from 'next-translate/useTranslation'
import Hero from 'components/core/Hero'
import MarqueeSlider from 'components/ui/MarqueeSlider'
// import styles from 'styles/Home.module.css'

const Home = () => {
	const { t } = useTranslation()

	return (
		<>
			<Head
				title={t('home:meta-title')}
				description={t('home:meta-description')}
			/>
			<Hero />
			<MarqueeSlider />
		</>
	)
}

export default Home
