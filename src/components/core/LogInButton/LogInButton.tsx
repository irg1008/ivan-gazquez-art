import useTranslation from 'next-translate/useTranslation'
import styles from './LogInButton.module.css'
import { SiGithub } from 'react-icons/si'
import { useSession, signIn, signOut } from 'next-auth/react'

const LogInButton = () => {
	const { t } = useTranslation()
	const { data: session } = useSession()

	const handleSignIn = () => signIn('github')

	if (!!session) {
		return (
			<>
				{session.user?.email}
				<button type="button" onClick={() => signOut()}>
					{t('common:log_out')}
				</button>
			</>
		)
	}

	return (
		<button type="button" className={styles.log_in} onClick={handleSignIn}>
			<SiGithub className={styles.icon} />
			{t('common:log_in')}
		</button>
	)
}

export default LogInButton
