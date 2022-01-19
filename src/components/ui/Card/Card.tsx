import { CardProps } from 'core'
import styles from './Card.module.css'

const Card = ({ header, title, description }: CardProps) => {
	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>{header}</header>
			<h4 className={styles.title}>{title}</h4>
			{!!description && <p>{description}</p>}
		</div>
	)
}

export default Card
