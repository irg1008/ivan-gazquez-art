import router from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'
import { GA_TRACKING_ID } from './const'
import * as gtag from './gtag'

export const GAScript = () => {
	useEffect(() => {
		const handleRouteChange = (url: string) => gtag.pageview(url)
		// Onload
		handleRouteChange(window.location.pathname)
		router.events.on('routeChangeComplete', handleRouteChange)
		return () => router.events.off('routeChangeComplete', handleRouteChange)
	}, [])

	return (
		<>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
			/>
			<Script
				strategy="afterInteractive"
				id="ga"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
				}}
			/>
		</>
	)
}
