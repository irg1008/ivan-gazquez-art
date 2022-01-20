import { Project as ProjectType } from 'core'
import Project from 'components/ui/Project'
import styles from './Projects.module.css'
import { FadeInFromBottom } from 'components/transitions/Parallax'

type ProjectsProps = { projects: ProjectType[] }

const Projects = ({ projects }: ProjectsProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.projects}>
				{projects.map((project, i) => (
					<div key={i} className={styles.project}>
						<FadeInFromBottom>
							<Project project={project} />
						</FadeInFromBottom>
					</div>
				))}
			</div>
		</div>
	)
}

export default Projects
