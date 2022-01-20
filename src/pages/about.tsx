import Head from 'components/meta/Head'
import useTranslation from 'next-translate/useTranslation'
import MarqueeSlider from 'components/ui/MarqueeSlider'
// import styles from 'styles/Home.module.css'

const About = () => {
	const { t } = useTranslation()

	return (
		<>
			<Head
				title={t('about:meta-title')}
				description={t('about:meta-description')}
			/>
			<MarqueeSlider />
			<MarqueeSlider />
			<MarqueeSlider />
			<MarqueeSlider />
		</>
	)
}

export default About
