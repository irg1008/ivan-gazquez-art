import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Error from 'pages/404'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementationOnce(() => ({
	asPath: '/404',
}))

describe('Home', () => {
	it('renders a heading', () => {
		render(<Error />)

		const errorNumber = screen.getByRole('heading', {
			name: '404',
		})

		expect(errorNumber).toBeInTheDocument()
	})
})
