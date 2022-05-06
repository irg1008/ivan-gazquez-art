import Nav from 'components/core/Nav'
import ScrollUp from 'components/ui/ScrollUp'
import styles from './Layout.module.css'
import { LayoutPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import Footer from 'components/ui/Footer'

const Layout: LayoutPage = ({ children }) => {
	const { t } = useTranslation()

	const navLinks: Record<string, string> = {
		'/': 'dev',
		'/about': 'about',
	}

	// Get traductions for links.
	for (const [key, value] of Object.entries(navLinks)) {
		navLinks[key] = t(`common:links.${value}`)
	}

	return (
		<div className={styles.layout}>
			<header className={styles.header}>
				{!!navLinks && <Nav links={navLinks} />}
			</header>

			<main className={styles.main_content}>
				{children}
				<aside className={styles.scroll_up}>
					<ScrollUp />
				</aside>
			</main>

			<Footer />
		</div>
	)
}

export default Layout
