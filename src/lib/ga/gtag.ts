import { GA_TRACKING_ID } from './const'

type WindowGA = Window &
	typeof globalThis & {
		gtag: (...args: unknown[]) => void
	}

const windowGA = () => window as WindowGA

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string, title?: string) =>
	windowGA().gtag('config', GA_TRACKING_ID, {
		page_path: url,
		page_title: title,
	})

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
	action,
	category,
	label,
	value,
}: {
	action: string
	category: string
	label: string
	value: string
}) =>
	windowGA().gtag('event', action, {
		event_category: category,
		event_label: label,
		value,
	})
