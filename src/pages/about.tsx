import Head from 'components/meta/Head'
import useTranslation from 'next-translate/useTranslation'
import styles from 'styles/About.module.css'
import Bubbles from 'components/core/Bubbles'
import Title from 'components/ui/Title'
import Timeline from 'components/core/Timeline'
import Projects from 'components/ui/Projects'
import { projects } from 'lib/knowledge/about'

const About = () => {
	const { t } = useTranslation()

	return (
		<div className={styles.about}>
			<Head
				title={t('about:meta-title')}
				description={t('about:meta-description')}
			/>
			<div className={styles.section}>
				<Title title={t('about:interested')} />
				<Bubbles />
			</div>
			<div className={styles.section}>
				<Title title={t('about:time')} />
				<Timeline />
			</div>
			<div className={styles.section}>
				<Title title={t('about:other-projects')} />
				<h4 className={styles.section_description}>
					{t('about:other-projects-description')}
				</h4>
				<Projects projects={projects} />
			</div>
		</div>
	)
}

export default About
