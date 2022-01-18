import styles from './Nav.module.css'
import LangSwapper from 'components/core/LangSwapper'
import ThemeSwapper from 'components/core/ThemeSwapper'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

type NavProps = {
	links: Record<string, string>
}

const TabNav = ({ links }: NavProps) => {
	const [selectedTab, setSelectedTab] = useState<number>()
	const { t } = useTranslation()
	const { pathname } = useRouter()

	useEffect(() => {
		const index = Object.keys(links).indexOf(pathname)
		if (index !== selectedTab) setSelectedTab(index)
	}, [pathname, links, selectedTab])

	return (
		<nav className={`${styles.nav} backdrop-blur firefox:bg-opacity-90`}>
			<LangSwapper />
			<ul className={styles.links}>
				{Object.entries(links).map(([href, title], i) => (
					<li
						key={href}
						className={`${i === selectedTab && styles.active} ${styles.link}`}
					>
						<Link href={href}>{t(`common:links.${title}`)}</Link>
						{i === selectedTab ? (
							<motion.div
								className={styles.underline}
								layoutId="underline"
								transition={{ type: 'spring', stiffness: 300, damping: 25 }}
							/>
						) : null}
					</li>
				))}
			</ul>
			<ThemeSwapper />
		</nav>
	)
}

export default TabNav
