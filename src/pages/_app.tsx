import type { AppProps } from 'next/app'
import { NextPageWithLayout } from 'next'
import { CookiesProvider } from 'react-cookie'
import Head from 'components/meta/Head'
import '../styles/index.css'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import BaseLayout from 'layout/Base'
import { AnimatePresence } from 'framer-motion'

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
	const Layout = Component.Layout ?? BaseLayout

	return (
		<>
			<Head title="Default Title" description="Default Description" />
			<SessionProvider session={session}>
				<CookiesProvider>
					<AnimatePresence>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</AnimatePresence>
				</CookiesProvider>
			</SessionProvider>
		</>
	)
}

export default MyApp
