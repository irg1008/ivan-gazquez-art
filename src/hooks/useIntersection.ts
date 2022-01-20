import { useEffect, useRef } from 'react'
import { IntersectionOptions, useInView } from 'react-intersection-observer'

const useIntersection = (options?: IntersectionOptions) => {
	const [ref, inView, entry] = useInView(options)
	const prevInView = useRef(false)
	const dirty = prevInView.current || inView

	useEffect(() => {
		prevInView.current = inView
	}, [inView])

	return { ref, inView, entry, dirty }
}

export default useIntersection
