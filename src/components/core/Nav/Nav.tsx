import styles from './Nav.module.css'
import LangSwapper from 'components/core/LangSwapper'
import ThemeSwapper from 'components/core/ThemeSwapper'
import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'
import { useSpring, animated, config } from '@react-spring/web'

type NavLinks = Record<string, string>
type NavProps = {
	links: NavLinks
	onLinkClick: (link: string) => void
}

const Nav = ({ links, onLinkClick }: NavProps) => {
	const { t } = useTranslation()

	const [activeLink, setActiveLink] = useState<string>(Object.keys(links)[0])
	const [activePos, setActivePos] = useState<number>(0)

	const nLinks = Object.keys(links).length

	const setActive = (href: string, pos: number) => {
		setActiveLink(href)
		setActivePos(pos)
		onLinkClick(href)
	}

	// Animated with spring.

	const springStyles = useSpring({
		transform: `translateX(${activePos * 100}%)`,
		width: `calc(100%/${nLinks})`,
		config: config.stiff,
	})

	return (
		<div className={`${styles.nav} backdrop-blur-md`}>
			<LangSwapper />
			<div className={styles.links_wrapper}>
				<animated.span
					className={styles.tab_swapper}
					style={springStyles}
				></animated.span>
				<ul className={styles.links}>
					{Object.entries(links).map(([href, title], i) => (
						<li
							key={href}
							className={`${activeLink === href && styles.active} ${
								styles.link
							}`}
							onClick={() => setActive(href, i)}
						>
							<a>{t(`common:links.${title}`)}</a>
						</li>
					))}
				</ul>
			</div>
			<ThemeSwapper />
		</div>
	)
}

export default Nav
