import styles from './Nav.module.css'
import LangSwapper from 'components/core/LangSwapper'
import ThemeSwapper from 'components/core/ThemeSwapper'
import Link from 'next/link'

// type NavProps = {}

const Nav = () => {
	return (
		<div className={styles.nav}>
			<LangSwapper />
			<ThemeSwapper />
			<hr />
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>About</a>
					</Link>
				</li>
			</ul>
			<hr />
		</div>
	)
}

export default Nav
