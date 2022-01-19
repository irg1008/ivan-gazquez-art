import { useRef } from 'react'
import { useClickAway } from 'react-use'

const useOutsideClick = <T extends HTMLElement>(callback: () => void) => {
	const ref = useRef<T>(null)
	useClickAway(ref, callback, ['mousedown', 'touchstart'])
	return { ref }
}

export default useOutsideClick
