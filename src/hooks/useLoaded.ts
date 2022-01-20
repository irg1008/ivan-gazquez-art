import { useState } from 'react'
import { useMount } from 'react-use'

const useLoaded = () => {
	const [loaded, setLoaded] = useState(false)
	useMount(() => setLoaded(true))
	return { loaded }
}

export default useLoaded
