import { useCallback, useEffect, useState } from 'react'

const useScroll = (onScroll?: (scrollPos: number) => void) => {
	const [isTop, setIsTop] = useState(true)

	const listener = useCallback(() => {
		const wScroll = window.scrollY
		setIsTop(wScroll < 100)
		!!onScroll && onScroll(wScroll)
	}, [onScroll])

	useEffect(() => {
		// Call on load.
		listener()
		window.addEventListener('scroll', listener, {
			passive: true,
		})
		return () => window.removeEventListener('scroll', listener)
	}, [onScroll, listener])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return { scrollToTop, isTop }
}

export default useScroll
