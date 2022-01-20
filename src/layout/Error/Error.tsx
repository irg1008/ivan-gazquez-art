import styles from './Error.module.css'

type ErrorProps = {
	children: React.ReactNode
}

const Error = ({ children }: ErrorProps) => {
	return (
		<section className={styles.wrapper}>
			<main className={styles.main_content}>{children}</main>
		</section>
	)
}

export default Error
