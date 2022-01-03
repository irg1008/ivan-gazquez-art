import Nav from 'components/core/Nav'
import ScrollUp from 'components/ui/ScrollUp'
import useScroll from 'hooks/useScroll'
import { useState } from 'react'
import styles from './Layout.module.css'

const Navigation = () => {
	const [currentLink, setCurrentLink] = useState<string>()

	const links = {
		about: 'about',
		contact: 'contact',
	}

	// Navigate on click.
	const onLinkClick = (href: string) => {
		setCurrentLink(href)
		const element = document.getElementById(href)
		!!element && element.scrollIntoView({ behavior: 'smooth' })
	}

	// On scroll check the id we are in.
	const checkActive = (scrollPos: number) => {
		const linkOffsets: Record<string, number> = {}
		Object.keys(links).forEach((id) => {
			linkOffsets[id] = document.getElementById(id)?.offsetTop ?? 0
		})

		const activeLink = Object.keys(linkOffsets)
			.reverse()
			.find((id) => linkOffsets[id] <= scrollPos)

		setCurrentLink(activeLink)
	}

	useScroll(checkActive)

	return (
		<Nav links={links} onLinkClick={onLinkClick} currentLink={currentLink} />
	)
}

const Layout: React.FC = ({ children }) => {
	return (
		<section className={styles.layout}>
			<header className={styles.header}>
				<Navigation />
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
