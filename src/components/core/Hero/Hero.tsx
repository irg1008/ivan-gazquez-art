import styles from './Hero.module.css'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

// type HeroProps = {}

const Hero = () => {
	const { t } = useTranslation()

	return (
		<div className={styles.wrapper}>
			<div className={styles.avatar}>
				<Image
					src="/images/avatar.jpg"
					alt="Hero Avatar"
					layout="fill"
					priority
					objectFit="cover"
					quality={10}
					objectPosition="top"
					className="grayscale-[0.5]"
				/>
			</div>

			<h1 className={styles.title}>{t('common:title')}</h1>
			<h2 className={styles.subtitle}>{t('common:subtitle')}</h2>
			<h3>{t('common:detail')}</h3>
			<hr />
		</div>
	)
}

export default Hero
