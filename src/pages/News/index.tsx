import { useYscroll } from '@/hooks'
import { useGetNews } from '@/services'
import * as S from './News.styles'
import { NewsCard } from './components/Card'
import ShootingStarAnimation from './components/ShootingStar'

const NewsPage = () => {
  const { ref: bgRef } = useYscroll()
  const { data } = useGetNews()

  return (
    <S.Wrapper>
      <S.StarBg ref={bgRef} />
      <S.Container>
        <ShootingStarAnimation />
        <S.ContentContainer>
          {data && data.items.map((item) => <NewsCard key={item.etag} snippet={item.snippet} />)}
        </S.ContentContainer>
      </S.Container>
    </S.Wrapper>
  )
}

export default NewsPage
