import styles from './Nav.module.css'
import LangSwapper from 'components/core/LangSwapper'
import ThemeSwapper from 'components/core/ThemeSwapper'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useRef, useState } from 'react'
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

	const setActive = (href: string, pos: number) => {
		setActiveLink(href)
		setActivePos(pos)
		onLinkClick(href)
	}

	// Animated with spring. This could be improved a lot, but will do for now.
	const [width, setWidth] = useState(0)
	const [acumulativeWidth, setAcumulativeWidth] = useState(0)
	const linksRef = useRef<HTMLUListElement>(null)

	useEffect(() => {
		const currentElement = linksRef.current?.children[activePos] as HTMLElement
		const width = currentElement?.clientWidth ?? 0
		const acumulativeWidth = currentElement?.offsetLeft ?? 0
		setWidth(width)
		setAcumulativeWidth(acumulativeWidth)
	}, [activePos, t])

	const springStyles = useSpring({
		config: config.stiff,
		from: {
			opacity: 0,
		},
		to: {
			opacity: 1,
			x: `${acumulativeWidth - 15}px`,
			width: `${width + 30}px`,
		},
	})

	return (
		<div className={`${styles.nav} backdrop-blur firefox:bg-opacity-90`}>
			<LangSwapper />
			<div className={styles.links_wrapper}>
				<animated.span
					className={styles.tab_swapper}
					style={springStyles}
				></animated.span>
				<ul className={styles.links} ref={linksRef}>
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
