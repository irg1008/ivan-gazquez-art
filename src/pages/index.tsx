import type { NextPage } from "next"
import Head from "next/head"
import Globe from "components/ui/Globe"
import React from "react"
// import styles from "styles/Home.module.css"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Globe />
		</>
	)
}

export default Home
