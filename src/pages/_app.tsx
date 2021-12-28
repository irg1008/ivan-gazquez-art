import type { AppProps } from 'next/app'
import { NextPageWithLayout } from 'next'
import BaseLayout from 'components/layout/Base'
import '../styles/index.css'
import { CookiesProvider } from 'react-cookie'

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? BaseLayout
	return (
		<CookiesProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</CookiesProvider>
	)
}

export default MyApp
