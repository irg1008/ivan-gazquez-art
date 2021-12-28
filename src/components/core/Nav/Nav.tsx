import styles from './Nav.module.css'
import LangSwapper from 'components/core/LangSwapper'
import Link from 'next/link'

// type NavProps = {}

const Nav = () => {
	return (
		<div className={styles.nav}>
			<LangSwapper />
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
