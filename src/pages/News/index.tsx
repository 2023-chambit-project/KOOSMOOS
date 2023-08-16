import { useEffect, useRef } from 'react'
import * as S from './News.styles'

const NewsPage = () => {
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

  return (
    <S.Wrapper>
      <S.StarBg ref={bgRef} />
      <S.Container>{/* 본문 */}</S.Container>
    </S.Wrapper>
  )
}

export default NewsPage
