import { NextSeo } from 'next-seo'
import NextHead from 'next/head'
import { useRouter } from 'next/router'

interface Props {
	title: string
	description: string
	canonical?: string
}

const Head = ({ title, description, canonical }: Props) => {
	const { locale } = useRouter()

	return (
		<>
			<NextHead>
				<meta charSet="UTF-8" key="charset" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1"
					key="viewport"
				/>
				<link rel="apple-touch-icon" href="/favicon.ico" key="apple" />
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon.ico"
					key="icon32"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon.ico"
					key="icon16"
				/>
				<link rel="icon" href="/favicon.ico" key="favicon" />
			</NextHead>
			<NextSeo
				title={title}
				description={description}
				canonical={canonical}
				openGraph={{
					title,
					description,
					url: canonical,
					locale: locale,
					site_name: 'Portfolio',
				}}
			/>
		</>
	)
}

export default Head
