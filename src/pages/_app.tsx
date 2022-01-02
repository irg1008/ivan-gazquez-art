import type { AppProps } from 'next/app'
import { NextPageWithLayout } from 'next'
import BaseLayout from 'layout/Base'
import { CookiesProvider } from 'react-cookie'
import Head from 'components/meta/Head'
import '../styles/index.css'

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? BaseLayout
	return (
		<>
			<Head title="Default Title" description="Default Description" />
			<CookiesProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</CookiesProvider>
		</>
	)
}

export default MyApp
