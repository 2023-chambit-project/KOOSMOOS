import { useGetTechWikiPost } from '@/services'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import * as S from './Post.styles'

export const Post = () => {
  const { id } = useParams()
  const { data } = useGetTechWikiPost(id)

  return (
    <S.Container>
      <S.Thumbnail src={data?.thumbnail} />
      <S.Title>{data?.title}</S.Title>
      <S.ProfileSection>
        <S.ProfileImage src={data?.writer.profile_img} />
        <div>
          <S.NickName>{data?.writer.nickname}</S.NickName>
          <S.Date>{data?.date}</S.Date>
        </div>
      </S.ProfileSection>
      <S.ContentWrap>
        {data && (
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {data.content}
          </ReactMarkdown>
        )}
      </S.ContentWrap>
    </S.Container>
  )
}
