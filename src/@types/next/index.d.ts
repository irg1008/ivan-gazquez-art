import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

declare module 'next' {
	type NextPageWithLayout = NextPage & {
		getLayout?: (page: ReactElement) => ReactNode
	}

	export { NextPageWithLayout }
}
