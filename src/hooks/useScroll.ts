import { useEffect, useState } from 'react'

const useScroll = (onScroll?: (scrollPos: number) => void) => {
	const [isTop, setIsTop] = useState(true)

	useEffect(() => {
		const listener = () => {
			const wScroll = window.scrollY
			setIsTop(wScroll < 100)
			!!onScroll && onScroll(wScroll)
		}
		window.addEventListener('scroll', listener, {
			passive: true,
		})
		return () => window.removeEventListener('scroll', listener)
	}, [onScroll])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return { scrollToTop, isTop }
}

export default useScroll
