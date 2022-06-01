import styles from './Hero.module.css'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import Social from 'components/ui/Social'

// type HeroProps = {}

const Hero = () => {
	const { t } = useTranslation('dev')

	return (
		<section className={styles.hero}>
			<article className={styles.wrapper}>
				<header className={styles.info}>
					<div className={styles.avatar}>
						<Image
							src="/images/avatar.jpg"
							alt="Hero Avatar"
							layout="fill"
							priority
							objectFit="cover"
							objectPosition="top"
							className={styles.avatar_img}
						/>
					</div>
					<summary className={styles.text}>
						<span className={styles.title}>{t('title')}</span>
						<h1 className={styles.subtitle}>{t('subtitle')}</h1>
						<hr className={styles.separator} />
						<p className={styles.data}>{`"${t('detail')}"`}</p>
					</summary>
				</header>
				<p className={styles.follow}>{t('follow')}:</p>
				<footer className={styles.social}>
					<Social />
				</footer>
			</article>
		</section>
	)
}

export default Hero
