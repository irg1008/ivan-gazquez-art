import type { NextPageWithLayout } from 'next'
import Head from 'components/meta/Head'
import useTranslation from 'next-translate/useTranslation'
import Hero from 'components/core/Hero'
import Layout from 'layout/Base'
import MarqueeSlider from 'components/ui/MarqueeSlider'
// import styles from 'styles/Home.module.css'

const Home: NextPageWithLayout = () => {
	const { t } = useTranslation()

	const navLinks: Record<string, string> = {
		about: 'about',
		languages: 'languages',
		projects: 'projects',
	}

	return (
		<Layout navLinks={navLinks}>
			<Head
				title={t('home:meta-title')}
				description={t('home:meta-description')}
			/>
			<Hero />
			<MarqueeSlider />
			<HomeSections />
		</Layout>
	)
}

const HomeSections = () => {
	return (
		<div>
			<div id="about" className="h-[120rem]">
				<h1>ABOUT</h1>
			</div>
			<div id="languages" className="h-[20rem]">
				<h1>LANGUAGES</h1>
			</div>
			<div id="projects" className="h-[120rem]">
				<h1>PROJECTS</h1>
			</div>
		</div>
	)
}

export default Home
