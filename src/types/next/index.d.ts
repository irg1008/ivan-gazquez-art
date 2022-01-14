import { NextPage } from 'next'
import React from 'react'

declare module 'next' {
	type LayoutPage<T> = T & {
		children: React.ReactNode
	}

	type NextPageWithLayout = NextPage & {
		Layout?: LayoutPage
	}

	export { NextPageWithLayout }
}
