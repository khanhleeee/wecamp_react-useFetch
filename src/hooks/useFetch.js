import { useEffect } from 'react'
import { useState } from 'react'

const useFetch = (url) => {
	const [loading, setLoadng] = useState(false)
	const [data, setData] = useState(undefined)
	const [error, setError] = useState(undefined)

	useEffect(() => {
		const handleFetchData = async () => {
			setLoadng(true)
			try {
				const res = await fetch(url)
				if (!res.ok) {
					throw res
				}

				const fetchData = await res.json()
				setData(fetchData)
				setLoadng(false)
			} catch (err) {
				console.log(err)
				setError(err.statusText)
				setLoadng(false)
			}
		}

		handleFetchData()
	}, [])

	return { data, error, loading }
}

export default useFetch
