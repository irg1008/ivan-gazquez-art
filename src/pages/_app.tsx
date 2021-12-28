import type { AppProps } from 'next/app'
import { NextPageWithLayout } from 'next'
import BaseLayout from 'components/layout/Base'
import '../styles/index.css'

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? BaseLayout
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
