type EventType = string
type CEvent = CustomEvent
type fn = (event: CEvent) => void
type Data = Record<string, unknown>

const on = (eventType: EventType, listener: fn) =>
	document.addEventListener(eventType, (e) => listener(e as CEvent))

const off = (eventType: EventType, listener: fn) =>
	document.removeEventListener(eventType, (e) => listener(e as CEvent))

const once = (eventType: EventType, listener: fn) => {
	const handleEventOnce = (event: CEvent) => {
		listener(event)
		off(eventType, handleEventOnce)
	}

	on(eventType, handleEventOnce)
}

const trigger = (eventType: EventType, data: Data) => {
	const event = new CustomEvent(eventType, { detail: data })
	document.dispatchEvent(event)
}

export { on, once, off, trigger }
