import styles from './Hero.module.css'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

// type HeroProps = {}

const Hero = () => {
	const { t } = useTranslation('dev')

	return (
		<div className={styles.hero}>
			<div className={styles.wrapper}>
				<div className={styles.info}>
					<div className={styles.avatar}>
						<Image
							src="/images/avatar.jpg"
							alt="Hero Avatar"
							layout="fill"
							priority
							objectFit="cover"
							quality={10}
							objectPosition="top"
							className="grayscale-[0.25]"
						/>
					</div>
					<div className={styles.text}>
						<h1 className={styles.title}>{t('title')}</h1>
						<h2 className={styles.subtitle}>{t('subtitle')}</h2>
						<hr className={styles.separator} />
						<p className={styles.data}>{`"${t('detail')}"`}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
