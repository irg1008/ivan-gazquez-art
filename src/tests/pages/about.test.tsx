import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import About from 'pages/about'

describe('Home', () => {
	it('renders a heading', () => {
		render(<About />)

		const heading = screen.getByRole('heading', {
			name: 'Eyyy!!',
		})

		expect(heading).toBeInTheDocument()
	})
})
