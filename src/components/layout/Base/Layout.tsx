import Nav from 'components/core/Nav'

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Nav />
			<main>{children}</main>
		</>
	)
}

export default Layout
