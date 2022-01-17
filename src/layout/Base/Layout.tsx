import Nav from 'components/core/Nav'
import ScrollUp from 'components/ui/ScrollUp'
import styles from './Layout.module.css'
import UserOutlet from 'components/core/UserOutlet'
import { LayoutPage } from 'next'

const Layout: LayoutPage = ({ children }) => {
	const navLinks: Record<string, string> = {
		'/': 'home',
		'/about': 'about',
	}

	return (
		<section className={styles.layout}>
			<header className={styles.header}>
				{!!navLinks && <Nav links={navLinks} />}
				<UserOutlet />
			</header>

			<main className={styles.main_content}>
				{children}
				<div className={styles.scroll_up}>
					<ScrollUp />
				</div>
			</main>

			<footer className={styles.footer}></footer>
		</section>
	)
}

export default Layout
