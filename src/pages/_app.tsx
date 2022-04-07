import type { AppProps } from 'next/app'
import { NextPageWithLayout } from 'next'
import Head from 'components/meta/Head'
import '../styles/index.css'
import BaseLayout from 'layout/Base'
import { GAScript } from 'lib/ga/GAScript'

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const Layout = Component.Layout ?? BaseLayout

	return (
		<>
			<Head title="Default Title" description="Default Description" />
			<GAScript />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
