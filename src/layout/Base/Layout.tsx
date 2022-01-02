import Nav from 'components/core/Nav'
import ScrollUp from 'components/ui/ScrollUp'
import styles from './Layout.module.css'

const Layout: React.FC = ({ children }) => {
	const links = {
		about: 'about',
		contact: 'contact',
	}

	const onLinkClick = (href: string) => {
		const element = document.getElementById(href)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<section className={styles.layout}>
			<header id={styles.main_header}>
				<Nav links={links} onLinkClick={onLinkClick} />
			</header>
			<main className={styles.main_content}>{children}</main>
			<footer></footer>
			<ScrollUp />
		</section>
	)
}

export default Layout
