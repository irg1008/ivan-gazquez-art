import { useEffect } from 'react'
import { on, off } from 'utils/events'

const useResize = (cb: () => void, onLoad?: boolean) => {
	useEffect(() => {
		on('resize', cb)
		if (onLoad) cb()
		return off('resize', cb)
	}, [cb, onLoad])
}

export default useResize
