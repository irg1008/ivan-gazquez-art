import styles from './Title.module.css'

type TitleProps = {
	title: string
}

const Title = ({ title }: TitleProps) => {
	return <h1 className={styles.title}>{title}</h1>
}

export default Title
