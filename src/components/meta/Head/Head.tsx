import { NextSeo } from 'next-seo'
import useTranslation from 'next-translate/useTranslation'
import NextHead from 'next/head'
import Script from 'next/script'

interface Props {
	title: string
	description?: string
	canonical?: string
}

const Head = ({ title, description, canonical }: Props) => {
	const { lang: locale } = useTranslation()

	return (
		<>
			<NextHead>
				<Script
					id="tag_manager"
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-NXJX3WJ');`,
					}}
				></Script>
				<meta charSet="UTF-8" key="charset" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1"
					key="viewport"
				/>
				{/* <link rel="apple-touch-icon" href="/favicon.ico" key="apple" /> */}
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
				title={`${title} - Portfolio`}
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
