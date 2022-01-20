import Head from 'components/meta/Head'
import useTranslation from 'next-translate/useTranslation'
// import styles from 'styles/Home.module.css'

const About = () => {
	const { t } = useTranslation()

	return (
		<>
			<Head
				title={t('design:meta-title')}
				description={t('design:meta-description')}
			/>
			UNDER CONSTRUCTION
		</>
	)
}

export default About
