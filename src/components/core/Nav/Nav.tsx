import styles from './Nav.module.css'
import LangSwapper from 'components/core/LangSwapper'
import ThemeSwapper from 'components/core/ThemeSwapper'
import { useEffect, useState } from 'react'
import {
	motion,
	AnimatePresence,
	Variant,
	Variants,
	Transition,
} from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import UserOutlet from 'components/core/UserOutlet'
import Ham from 'components/ui/Ham/Ham'
import { useToggle, useWindowSize } from 'react-use'
import useLoaded from 'hooks/useLoaded'

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

const glassClass = `${styles.glass} backdrop-blur firefox:bg-opacity-90`

const Nav = ({ links }: NavProps) => {
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
							className={`${styles.nav} ${glassClass}`}
						>
							<NavContent links={links} />
						</motion.nav>
					</>
				)}
			</AnimatePresence>
			{!isLG && (
				<motion.div>
					<Ham
						toggled={navOpen}
						onToggle={toggleNavOpen}
						className={`${styles.ham} ${glassClass} ${
							navOpen && styles.ham_open
						}`}
					/>
				</motion.div>
			)}
		</>
	) : null
}

const NavContent = ({ links }: NavProps) => {
	const [selectedTab, setSelectedTab] = useState<number>(0)
	const { pathname } = useRouter()

	useEffect(() => {
		const index = Object.keys(links).indexOf(pathname)
		if (index !== selectedTab) setSelectedTab(index)
	}, [pathname, links, selectedTab])

	return (
		<div className={styles.nav_content}>
			<div className={styles.lang}>
				<LangSwapper />
			</div>
			<hr className={styles.nav_separator} />
			<ul className={styles.links}>
				{Object.entries(links).map(([href, title], i) => (
					<li
						key={href}
						className={`${i === selectedTab && styles.active} ${styles.link}`}
					>
						<Link href={href}>{title}</Link>
						{i === selectedTab ? (
							<motion.div
								className={styles.underline}
								layoutId="underline"
								transition={{
									type: 'spring',
									stiffness: 300,
									damping: 25,
								}}
							/>
						) : null}
					</li>
				))}
			</ul>
			<div className={styles.theme}>
				<ThemeSwapper />
			</div>
			<div className={styles.user}>
				<UserOutlet />
			</div>
		</div>
	)
}

export default Nav
