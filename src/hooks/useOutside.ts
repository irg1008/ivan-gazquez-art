import { useEffect, useRef } from 'react'

const useOutside = <T extends HTMLElement>(onClick: () => void) => {
	const ref = useRef<T>(null)

	useEffect(() => {
		const handleclick = (e: MouseEvent) =>
			ref.current && !ref.current.contains(e.target as Node) && onClick()

		document.addEventListener('mousedown', handleclick)
		return () => document.removeEventListener('mousedown', handleclick)
	}, [ref, onClick])

	return [ref]
}

export default useOutside
