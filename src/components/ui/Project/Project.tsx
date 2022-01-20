import styles from './Project.module.css'
import { Project } from 'core'
import useTranslation from 'next-translate/useTranslation'

type ProjectProps = {
	project: Project
}

const Project = ({
	project: { image, title, description, link, tools, name },
}: ProjectProps) => {
	const { t } = useTranslation()

	return (
		// open in blank
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			title={t('common:projects.go-to', { project: name })}
			className={styles.wrapper}
		>
			<h3 className={styles.title}>{title}</h3>
			<section className={styles.image}>{image}</section>
			{description && <p>{description}</p>}
			<div className={styles.tools}>
				<p>{t('common:projects.tools')}:</p> {tools}
			</div>
		</a>
	)
}

export default Project
