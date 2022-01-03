import styles from './Error.module.css'

const Error: React.FC = ({ children }) => {
	return (
		<section className={styles.wrapper}>
			<main className={styles.main_content}>{children}</main>
		</section>
	)
}

export default Error
