import { useWindowScroll } from 'react-use'
import { useEffect, useState } from 'react'

const useScrollPosition = (onScroll?: (pos: number) => void) => {
	const { x, y } = useWindowScroll()
	const [isTop, setIsTop] = useState(true)
	const [isBottom, setIsBottom] = useState(false)

	useEffect(() => {
		setIsTop(y === 0)
		setIsBottom(y + window.innerHeight === document.body.scrollHeight)
		!!onScroll && onScroll(y)
	}, [y, onScroll])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return { scrollToTop, isTop, isBottom, x, y }
}

export default useScrollPosition
