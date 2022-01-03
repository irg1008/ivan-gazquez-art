import styles from './Nav.module.css'
import LangSwapper from 'components/core/LangSwapper'
import ThemeSwapper from 'components/core/ThemeSwapper'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useRef, useState } from 'react'
import { Variant, Variants, motion, AnimatePresence } from 'framer-motion'

type NavLinks = Record<string, string>
type NavProps = {
	links: NavLinks
	currentLink?: string
	onLinkClick: (link: string) => void
}

interface NavVariants extends Variants {
	from: Variant
	to: Variant
}

// TODO: REVISAR Y LIMPIAR
const Nav = ({ links, onLinkClick, currentLink }: NavProps) => {
	const { t } = useTranslation()

	const [activeLink, setActiveLink] = useState<string | undefined>(currentLink)
	const [activePos, setActivePos] = useState<number>(0)

	useEffect(() => {
		setActiveLink(currentLink)
		if (!!currentLink) {
			setActivePos(Object.keys(links).indexOf(currentLink))
		}
	}, [currentLink, links])

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

	const navVariants: NavVariants = {
		from: {
			opacity: 0,
		},
		to: {
			opacity: 1,
			x: `${acumulativeWidth - 15}px`,
			width: `${width + 30}px`,
		},
	}

	return (
		<div className={`${styles.nav} backdrop-blur firefox:bg-opacity-90`}>
			<LangSwapper />
			<div className={styles.links_wrapper}>
				<AnimatePresence>
					{!!activeLink && (
						<motion.span
							className={styles.tab_swapper}
							variants={navVariants}
							initial="from"
							animate="to"
							exit="from"
							whileHover={{
								opacity: 0.2,
							}}
							transition={{ type: 'spring', stiffness: 300, damping: 25 }}
						/>
					)}
				</AnimatePresence>
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
