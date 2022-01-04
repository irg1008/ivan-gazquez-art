import type { NextPageWithLayout } from 'next'
import Head from 'components/meta/Head'
import useTranslation from 'next-translate/useTranslation'
import Hero from 'components/core/Hero'
// import MarqueeSlider from 'components/ui/MarqueeSlider'
// import styles from "styles/Home.module.css"

const Home: NextPageWithLayout = () => {
	const { t } = useTranslation()
	return (
		<>
			<Head
				title={t('home:meta-title')}
				description={t('home:meta-description')}
			/>
			<Hero /> {/* <MarqueeSlider /> */}
			<div id="about" className="bg-blue-200 h-[120rem]"></div>
			<div id="languages" className="bg-purple-200-200 h-[20rem]"></div>
			<div id="contact" className="bg-red-200 h-[120rem]"></div>
			<div id="projects" className="bg-green-200 h-[20rem]"></div>
		</>
	)
}

export default Home
