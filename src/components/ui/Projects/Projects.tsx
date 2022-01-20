import { Project as ProjectType } from 'core'
import Project from '../Project'
import styles from './Projects.module.css'

type ProjectsProps = { projects: ProjectType[] }

const Projects = ({ projects }: ProjectsProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.projects}>
				{projects.map((project, i) => (
					<div key={i} className={styles.project}>
						<Project project={project} />
					</div>
				))}
			</div>
		</div>
	)
}

export default Projects
