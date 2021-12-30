import styles from './Nav.module.css'
import LangSwapper from 'components/core/LangSwapper'
import ThemeSwapper from 'components/core/ThemeSwapper'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

// type NavProps = {}

const Nav = () => {
	const paths = {
		'/': 'home',
		'/about': 'about',
		'/contact': 'contact',
	}

	const { pathname } = useRouter()
	const { t } = useTranslation()

	return (
		<div className={styles.nav}>
			<LangSwapper />

			<ul className={styles.links}>
				{Object.entries(paths).map(([href, title]) => (
					<li key={href}>
						<Link href={href}>
							<a className={`${pathname === href && styles.active}`}>
								{t(`common:links.${title}`)}
							</a>
						</Link>
					</li>
				))}
			</ul>

			<ThemeSwapper />
		</div>
	)
}

export default Nav
