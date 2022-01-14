import Nav from 'components/core/Nav'
import ScrollUp from 'components/ui/ScrollUp'
import { useState } from 'react'
import useScroll from 'hooks/useScrollPosition'
import styles from './Layout.module.css'
import LogInButton from 'components/core/LogInButton'

type NavigationtProps = {
	navLinks: Record<string, string>
}

const Navigation = ({ navLinks: links }: NavigationtProps) => {
	const [currentLink, setCurrentLink] = useState<string>()

	// Scroll threshold
	const threshold = 200

	// Navigate on click.
	const onLinkClick = (href: string) => {
		const element = document.getElementById(href)
		!!element &&
			window.scrollTo({
				top: element.offsetTop - (threshold - 50),
				behavior: 'smooth',
			})
	}

	// On scroll check the id we are in.
	const checkActive = (scrollPos: number) => {
		const linkOffsets: Record<string, number> = {}
		Object.keys(links).forEach((id) => {
			linkOffsets[id] = document.getElementById(id)?.offsetTop ?? 0
		})

		// Strategy to choose the id.
		const visible = Object.keys(linkOffsets).filter(
			(id) => linkOffsets[id] < scrollPos + threshold
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

type LayoutProps = Partial<NavigationtProps>

const Layout: React.FC<LayoutProps> = ({ children, navLinks }) => {
	return (
		<section className={styles.layout}>
			<header className={styles.header}>
				{!!navLinks && <Navigation navLinks={navLinks} />}
				<LogInButton />
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
