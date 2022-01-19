import useTranslation from 'next-translate/useTranslation'
import styles from './UserOutlet.module.css'
import { SiGithub } from 'react-icons/si'
import { useSession, signIn, signOut } from 'next-auth/react'
import Loading from 'components/ui/Loading/Loading'

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
		<button type="button" className={styles.log_in} onClick={handleSignOut}>
			{t('common:log_out')}
		</button>
	)
}

const UserOutlet = () => {
	const { data: session, status } = useSession()

	if (status === 'loading') return <Loading />
	else if (status === 'unauthenticated') return <SignInButton />
	return (
		<div className={styles.wrapper}>
			{session?.user?.name}
			<SignOutButton />
		</div>
	)
}

export default UserOutlet
