import Card from 'components/ui/Card'
import { CardProps } from 'core'
import styles from './BulkCard.module.css'

type BulkCardProps = {
	title: string
	cardProps: CardProps[]
	children?: React.ReactNode
}

const BulkCard = ({ title, cardProps, children }: BulkCardProps) => {
	return (
		<>
			<h4 className={styles.bulk_title}>{title}</h4>
			<article
				className={`${styles.wrapper} backdrop-blur-sm firefox:bg-opacity-90`}
			>
				<ul className={styles.cards}>
					{cardProps.map((props, i) => (
						<li key={i} className={styles.card}>
							<Card {...props} />
						</li>
					))}
				</ul>
				{children}
			</article>
		</>
	)
}

export default BulkCard
