import { NextPage } from 'next'

declare module 'next' {
	type LayoutPage<T = unknown> = {
		(props: PropsWithChildren<T>): ReactElement<unknown, unknown> | null
	}

	type NextPageWithLayout<T = unknown> = NextPage & {
		Layout?: LayoutPage<T>
	}

	export { NextPageWithLayout, LayoutPage }
}
