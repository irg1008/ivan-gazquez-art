import { NextPage } from 'next'

declare module 'next' {
	type NextPageWithLayout = NextPage & {
		Layout?: React.FC
	}

	export { NextPageWithLayout }
}
