import { SiGithub, SiGitlab, SiInstagram, SiLinkedin } from 'react-icons/si'
import styles from './Footer.module.css'
import Tooltip from 'components/ui/Tooltip'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.social}>
				<Tooltip tooltipText="GitHub">
					<a
						title="Github"
						href="https://github.com/irg1008"
						target="_blank"
						rel="noopener noreferrer"
					>
						<SiGithub />
					</a>
				</Tooltip>
				<Tooltip tooltipText="LinkedIn">
					<a
						title="LinkedIn"
						href="https://www.linkedin.com/in/gazquez"
						target="_blank"
						rel="noopener noreferrer"
					>
						<SiLinkedin />
					</a>
				</Tooltip>
				<Tooltip tooltipText="Instagram">
					<a
						title="Instagram"
						href="https://www.instagram.com/ivanrgazquez/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<SiInstagram />
					</a>
				</Tooltip>
				<Tooltip tooltipText="GitLab">
					<a
						title="GitLab"
						href="https://gitlab.com/irg1008"
						target="_blank"
						rel="noopener noreferrer"
					>
						<SiGitlab />
					</a>
				</Tooltip>
			</div>
			<div className={styles.name_wrapper}>
				<span />
				<h3 className={styles.name}>
					IVÁN RUIZ GÁZQUEZ - {new Date().getFullYear()}
				</h3>
				<span />
			</div>
		</footer>
	)
}

export default Footer
