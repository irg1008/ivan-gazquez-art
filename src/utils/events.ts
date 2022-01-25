type EventType = string
type CEvent = CustomEvent
type fn = (event: CEvent) => void
type Data = Record<string, unknown>

const on = (eventType: EventType, listener: fn) =>
	window.addEventListener(eventType, (e) => listener(e as CEvent))

const off = (eventType: EventType, listener: fn) =>
	window.removeEventListener(eventType, (e) => listener(e as CEvent))

const once = (eventType: EventType, listener: fn) => {
	const handleEventOnce = (event: CEvent) => {
		listener(event)
		off(eventType, handleEventOnce)
	}

	on(eventType, handleEventOnce)
}

const trigger = (eventType: EventType, data: Data) => {
	const event = new CustomEvent(eventType, { detail: data })
	window.dispatchEvent(event)
}

export { on, once, off, trigger }
