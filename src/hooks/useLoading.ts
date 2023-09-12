import { useEffect, useState } from 'react'

export const useLoading = (millisecond: number) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false)
    }, millisecond)

    return () => clearTimeout(loadingTimer)
  }, [millisecond])

  return { loading }
}
