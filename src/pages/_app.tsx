import type { AppProps } from 'next/app'
import { NextPageWithLayout } from 'next'
import { CookiesProvider } from 'react-cookie'
import Head from 'components/meta/Head'
import '../styles/index.css'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
	pageProps: {
		session: Session
	}
}

function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
	return (
		<>
			<Head title="Default Title" description="Default Description" />
			<SessionProvider session={session}>
				<CookiesProvider>
					<Component {...pageProps} />
				</CookiesProvider>
			</SessionProvider>
		</>
	)
}

export default MyApp
