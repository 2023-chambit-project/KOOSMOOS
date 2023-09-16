import { useGetTechWikiSummaryList } from '@/services'
import { WikiCard } from '..'
import * as S from './WikiPosts.styles'

export const WikiPosts = () => {
  const { data } = useGetTechWikiSummaryList()

  return (
    <S.Wrapper>
      {data?.posts.map((post) => (
        <div id={post.id}>
          <WikiCard postInfo={post} />
        </div>
      ))}
    </S.Wrapper>
  )
}
