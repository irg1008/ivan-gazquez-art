import Head from 'components/meta/Head'
import useTranslation from 'next-translate/useTranslation'
import styles from 'styles/About.module.css'
import Bubbles from 'components/core/Bubbles'
import Title from 'components/ui/Title'

const About = () => {
	const { t } = useTranslation()

	return (
		<div className={styles.about}>
			<Head
				title={t('about:meta-title')}
				description={t('about:meta-description')}
			/>
			<div>
				<Title title={"i'm interested in"} />
				<Bubbles />
			</div>
			<Title title={'my studies'} />
			<Title title={'where ive lived'} />
			<Title title={'where have i work'} />
			<Title title={'other projects. maker and stuff'} />
		</div>
	)
}

export default About
