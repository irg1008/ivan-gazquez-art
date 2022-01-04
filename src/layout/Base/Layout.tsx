import Nav from 'components/core/Nav'
import ScrollUp from 'components/ui/ScrollUp'
import { useState } from 'react'
import useScroll from 'hooks/useScrollPosition'
import styles from './Layout.module.css'

const Navigation = () => {
	const [currentLink, setCurrentLink] = useState<string>()

	const links: Record<string, string> = {
		about: 'about',
		languages: 'languages',
		contact: 'contact',
		projects: 'projects',
	}

	// Navigate on click.
	const onLinkClick = (href: string) => {
		const element = document.getElementById(href)
		!!element && element.scrollIntoView({ behavior: 'smooth' })
	}

	// On scroll check the id we are in.
	const checkActive = (scrollPos: number) => {
		const linkOffsets: Record<string, number> = {}
		Object.keys(links).forEach((id) => {
			linkOffsets[id] = document.getElementById(id)?.offsetTop ?? 0
		})

		// Strategy to choose the id.
		const visible = Object.keys(linkOffsets).filter(
			(id) => linkOffsets[id] < scrollPos + 200
		)

		if (visible.length === 0) {
			setCurrentLink(undefined)
			return
		}

		const keys = Object.keys(linkOffsets)
		const closest = keys.reduce((prev, curr) => {
			const diffPrev = Math.abs(linkOffsets[prev] - scrollPos)
			const diffCurr = Math.abs(linkOffsets[curr] - scrollPos)
			return diffPrev < diffCurr ? prev : curr
		})

		currentLink !== closest && setCurrentLink(closest)
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
