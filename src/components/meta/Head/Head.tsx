import NextHead from 'next/head'

interface Props {
	title: string
	description: string
}

const Head = ({ title, description }: Props) => (
	<NextHead>
		<title>{title}</title>
		<meta name="description" content={description} />
		<link rel="icon" href="/favicon.ico" />
	</NextHead>
)

export default Head
