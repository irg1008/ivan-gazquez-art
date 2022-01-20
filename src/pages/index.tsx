import Head from 'components/meta/Head'
import useTranslation from 'next-translate/useTranslation'
import Hero from 'components/core/Hero'
import MarqueeSlider from 'components/ui/MarqueeSlider'
import BulkCard from 'components/core/BulkCard'
import styles from 'styles/Dev.module.css'
import {
	languages,
	languagesLearning,
	technologies,
	technologiesLearning,
	tools,
	toolsLearning,
	projects,
} from 'lib/knowledge/dev'
import Blob from 'components/ui/Blob'
import Projects from 'components/ui/Projects'
import Title from 'components/ui/Title'

const Home = () => {
	const { t } = useTranslation()

	return (
		<div className={styles.dev}>
			<Head
				title={t('dev:meta-title')}
				description={t('dev:meta-description')}
			/>
			<Blob className={styles.blob} />
			<Blob className={styles.blob_bottom} type={2} />
			<Hero />
			<MarqueeSlider />
			<section className={styles.knowledge}>
				<Title title={t('dev:knowledge.title')} />
				<BulkCard title={t('dev:knowledge.languages')} cardProps={languages} />
				<BulkCard
					title={t('dev:knowledge.languages-learning')}
					cardProps={languagesLearning}
				/>
				<hr />
				<BulkCard
					title={t('dev:knowledge.technologies')}
					cardProps={technologies}
				/>
				<BulkCard
					title={t('dev:knowledge.technologies-learning')}
					cardProps={technologiesLearning}
				/>
				<hr />
				<BulkCard title={t('dev:knowledge.tools')} cardProps={tools} />
				<BulkCard
					title={t('dev:knowledge.tools-learning')}
					cardProps={toolsLearning}
				/>
			</section>
			<section className={styles.knowledge}>
				<Title title={t('dev:knowledge.my-projects')} />
				<Projects projects={projects} />
			</section>
		</div>
	)
}

export default Home
