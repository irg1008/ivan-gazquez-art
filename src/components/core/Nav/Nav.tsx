import styles from './Nav.module.css'
import LangSwapper from 'components/core/LangSwapper'
import ThemeSwapper from 'components/core/ThemeSwapper'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
	motion,
	AnimatePresence,
	Variant,
	Variants,
	Transition,
} from 'framer-motion'
import Link from 'next/link'
// import UserOutlet from 'components/core/UserOutlet'
import Ham from 'components/ui/Ham/Ham'
import { useToggle, useWindowSize } from 'react-use'
import useLoaded from 'hooks/useLoaded'
import useScrollPosition from 'hooks/useScrollPosition'
import useTranslation from 'next-translate/useTranslation'
import useResize from 'hooks/useResize'

type NavProps = {
	links: Record<string, string>
}

interface CustomVariants extends Variants {
	visible: Variant
	hidden: Variant
}

const navVariants: CustomVariants = {
	hidden: {
		x: '100%',
	},
	visible: {
		x: 0,
	},
}

const bgVariants: CustomVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
}

const transition: Transition = { type: 'tween' }

const glass = `${styles.glass} backdrop-blur firefox:bg-opacity-90`

const Nav = ({ links }: NavProps) => {
	const { isTop } = useScrollPosition()
	const [navOpen, toggleNavOpen] = useToggle(false)
	const { width } = useWindowSize()
	const isLG = width > 1024
	if (isLG && !navOpen) toggleNavOpen(true)

	const { loaded } = useLoaded()

	return loaded ? (
		<>
			<AnimatePresence initial={false}>
				{navOpen && (
					<>
						{!isLG && (
							<motion.div
								variants={bgVariants}
								initial="hidden"
								animate="visible"
								exit="hidden"
								className={`${styles.bg} backdrop-blur-sm`}
								transition={transition}
								onClick={() => toggleNavOpen(false)}
							/>
						)}
						<motion.nav
							variants={navVariants}
							initial="hidden"
							animate="visible"
							exit="hidden"
							transition={transition}
							className={styles.nav}
						>
							<div
								className={`${styles.nav_wrapper} ${glass} ${
									isLG && isTop && styles.fade
								}`}
							>
								<AnimatePresence>
									<NavContent links={links} />
								</AnimatePresence>
							</div>
						</motion.nav>
					</>
				)}
			</AnimatePresence>
			{!isLG && (
				<motion.div>
					<Ham
						toggled={navOpen}
						onToggle={toggleNavOpen}
						className={`${styles.ham} ${glass} ${navOpen && styles.ham_open}`}
					/>
				</motion.div>
			)}
		</>
	) : null
}

const NavContent = ({ links }: NavProps) => {
	const { t } = useTranslation()

	const [selectedTab, setSelectedTab] = useState<number>(0)
	const [tabWidth, setTabWidth] = useState<number>(0)
	const [tabX, setTabX] = useState<number>(0)
	const [tabHeight, setTabHeight] = useState<number>(0)
	const [tabY, setTabY] = useState<number>(0)

	const listRef = useRef<HTMLUListElement>(null)

	const updateTab = useCallback(() => {
		const currentElement = listRef.current?.children[selectedTab] as HTMLElement
		const width = currentElement?.clientWidth ?? 0
		const height = currentElement?.clientHeight ?? 0
		const x = currentElement?.offsetLeft ?? 0
		const y = currentElement?.offsetTop ?? 0

		setTabWidth(width)
		setTabHeight(height)
		setTabX(x)
		setTabY(y)
	}, [selectedTab])

	useEffect(() => {
		updateTab()
	}, [updateTab, t, tabX, tabY])

	useResize(updateTab)

	return (
		<div className={styles.nav_content}>
			<div className={styles.lang}>
				<LangSwapper />
			</div>
			<hr className={styles.nav_separator} />
			<ul className={styles.links} ref={listRef}>
				{Object.entries(links).map(([href, title], i) => (
					<li
						key={href}
						className={`${i === selectedTab ? styles.active : ''} ${
							styles.link
						}`}
						onClick={() => setSelectedTab(i)}
						// onMouseEnter={() => setSelectedTab(i)}
					>
						<Link href={href}>{title}</Link>
					</li>
				))}
				<motion.span
					className={styles.underline}
					initial={false}
					animate={{
						x: `${tabX}px`,
						y: `${tabY}px`,
						width: `${tabWidth}px`,
						height: `${tabHeight}px`,
					}}
					transition={{
						type: 'spring',
						stiffness: 300,
						damping: 25,
					}}
				/>
			</ul>
			<div className={styles.theme}>
				<ThemeSwapper />
			</div>
			{/* <div className={styles.user}>
				<UserOutlet />
			</div> */}
		</div>
	)
}

export default Nav
