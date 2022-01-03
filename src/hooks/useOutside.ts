import { useEffect, RefObject } from 'react'

type Props = {
	ref: RefObject<HTMLElement>
	onClick: () => void
}

const useOutside = ({ ref, onClick }: Props) => {
	useEffect(() => {
		const handleclick = (e: MouseEvent) =>
			ref.current && !ref.current.contains(e.target as Node) && onClick()

		document.addEventListener('mousedown', handleclick)
		return () => document.removeEventListener('mousedown', handleclick)
	}, [ref, onClick])
}

export default useOutside
