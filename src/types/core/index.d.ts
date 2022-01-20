declare module 'core' {
	type CardProps = {
		header: React.ReactNode
		title?: string
		description?: string
	}

	type Project = {
		name: string
		title: React.ReactNode
		description?: string
		link?: string
		image: React.ReactNode
		tools: React.ReactNode[]
	}

	export { CardProps, Project }
}
