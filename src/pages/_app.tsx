import type { AppProps } from 'next/app'
import { NextPageWithLayout } from 'next'
import Head from 'components/meta/Head'
import '../styles/index.css'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import BaseLayout from 'layout/Base'
import { GAScript } from 'lib/ga/GAScript'

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
			<GAScript />
			<SessionProvider session={session}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SessionProvider>
		</>
	)
}

export default MyApp
