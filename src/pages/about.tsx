import Head from 'components/meta/Head'
import useTranslation from 'next-translate/useTranslation'
import MarqueeSlider from 'components/ui/MarqueeSlider'
// import styles from 'styles/Home.module.css'

const About = () => {
	const { t } = useTranslation()

	return (
		<>
			<Head
				title={t('home:meta-title')}
				description={t('home:meta-description')}
			/>
			<MarqueeSlider />
		</>
	)
}

export default About
