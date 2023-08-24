import { useYscroll } from '@/hooks'
import * as S from './News.styles'

const NewsPage = () => {
  const { ref: bgRef } = useYscroll()

  return (
    <S.Wrapper>
      <S.StarBg ref={bgRef} />
      <S.Container></S.Container>
    </S.Wrapper>
  )
}

export default NewsPage
