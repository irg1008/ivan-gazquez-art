import useTranslation from 'next-translate/useTranslation'
import styles from './UserOutlet.module.css'
import { SiGithub } from 'react-icons/si'
import { useSession, signIn, signOut } from 'next-auth/react'

const SignInButton = () => {
	const { t } = useTranslation()
	const handleSignIn = () => signIn('github', { redirect: false })

	return (
		<button type="button" className={styles.log_in} onClick={handleSignIn}>
			<SiGithub className={styles.icon} />
			{t('common:log_in')}
		</button>
	)
}

const SignOutButton = () => {
	const { t } = useTranslation()
	const handleSignOut = () => signOut({ redirect: false })

	return (
		<button type="button" onClick={handleSignOut}>
			{t('common:log_out')}
		</button>
	)
}

const Loading = () => {
	return (
		<svg
			className={styles.loading}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle
				className="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				strokeWidth="4"
			/>
			<path
				className="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			/>
		</svg>
	)
}

const UserOutlet = () => {
	const { data: session, status } = useSession()

	if (status === 'loading') return <Loading />
	else if (status === 'unauthenticated') return <SignInButton />
	return (
		<>
			{session?.user?.name}
			<SignOutButton />
		</>
	)
}

export default UserOutlet
