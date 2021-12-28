import type { NextPageWithLayout } from 'next'
import Head from 'components/meta/Head'
import useTranslation from 'next-translate/useTranslation'

const Home: NextPageWithLayout = () => {
	const { t } = useTranslation()
	return (
		<>
			<Head
				title={t('home:meta-title')}
				description={t('home:meta-description')}
			/>
			<h1>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. A corporis
				aperiam, reiciendis rem temporibus quisquam debitis facilis totam ipsa
				eligendi obcaecati iusto perferendis asperiores assumenda, libero,
				maiores ullam vitae quasi!
			</h1>
		</>
	)
}

export default Home
