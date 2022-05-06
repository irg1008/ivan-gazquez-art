import styles from './Title.module.css'

type TitleProps = {
	title: string
}

const Title = ({ title }: TitleProps) => {
	return <h3 className={styles.title}>{title}</h3>
}

export default Title
