import { useWindowScroll } from 'react-use'
import { useEffect, useState } from 'react'

const useScrollPosition = (onScroll?: (pos: number) => void) => {
	const { x, y } = useWindowScroll()
	const [isTop, setIsTop] = useState(true)

	useEffect(() => {
		setIsTop(y === 0)
		!!onScroll && onScroll(y)
	}, [y, onScroll])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return { scrollToTop, isTop, x, y }
}

export default useScrollPosition
