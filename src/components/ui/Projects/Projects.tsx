import { Project as ProjectType } from 'core'
import Project from 'components/ui/Project'
import styles from './Projects.module.css'
import { FadeInFromBottom } from 'components/transitions/OnView'

type ProjectsProps = { projects: ProjectType[] }

const Projects = ({ projects }: ProjectsProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.projects}>
				{projects.map((project, i) => (
					<div key={i} className={styles.project}>
						<FadeInFromBottom triggerOnce>
							<Project project={project} />
						</FadeInFromBottom>
					</div>
				))}
			</div>
		</div>
	)
}

export default Projects
