import { useEffect, useRef } from 'react'

export const useYscroll = () => {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let scrollY = 0

    const handleScroll = () => {
      scrollY = window.scrollY

      if (bgRef.current) {
        bgRef.current.style.backgroundPositionY = `-${scrollY}px`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { ref: bgRef }
}
