import type { NextPageWithLayout } from 'next'
import Head from 'components/meta/Head'
import Globe from 'components/ui/Globe'
import MarqueeSlider from 'components/ui/MarqueeSlider'
import React from 'react'
// import styles from "styles/Home.module.css"

const Home: NextPageWithLayout = () => {
	return (
		<>
			<Head title="Home" description="Home page" />
			<Globe />
			<div className="flex flex-col justify-start w-full gap-8 pt-8 h-80">
				<MarqueeSlider />
			</div>
		</>
	)
}

export default Home
