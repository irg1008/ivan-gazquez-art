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
} from 'lib/knowledge/dev'
import Blob from 'components/ui/Blob'

const Home = () => {
	const { t } = useTranslation()

	return (
		<>
			<Blob className={styles.blob} />
			<Blob className={styles.blob_bottom} type={2} />
			<Head
				title={t('dev:meta-title')}
				description={t('dev:meta-description')}
			/>
			<Hero />
			<MarqueeSlider />
			<div className={styles.knowledge}>
				<h1 className={styles.knowledge_title}>{t('dev:knowledge.title')}</h1>
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
			</div>
		</>
	)
}

export default Home
