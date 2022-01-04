import type { AppProps } from 'next/app'
import { NextPageWithLayout } from 'next'
import { CookiesProvider } from 'react-cookie'
import Head from 'components/meta/Head'
import '../styles/index.css'

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	return (
		<>
			<Head title="Default Title" description="Default Description" />
			<CookiesProvider>
				<Component {...pageProps} />
			</CookiesProvider>
		</>
	)
}

export default MyApp
