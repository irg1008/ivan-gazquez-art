import Nav from 'components/core/Nav'
import styles from './Layout.module.css'

const Layout: React.FC = ({ children }) => {
	return (
		<section className={styles.layout}>
			<header id={styles.main_header}>
				<Nav />
			</header>
			<main className={styles.main_content}>{children}</main>
			<footer></footer>
		</section>
	)
}

export default Layout
