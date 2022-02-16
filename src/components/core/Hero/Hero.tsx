import styles from './Hero.module.css'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import Social from 'components/ui/Social'

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
							objectPosition="top"
						/>
					</div>
					<div className={styles.text}>
						<h1 className={styles.title}>{t('title')}</h1>
						<h2 className={styles.subtitle}>{t('subtitle')}</h2>
						<hr className={styles.separator} />
						<p className={styles.data}>{`"${t('detail')}"`}</p>
					</div>
				</div>
				<p className={styles.follow}>{t('follow')}:</p>
				<div className={styles.social}>
					<Social />
				</div>
			</div>
		</div>
	)
}

export default Hero
