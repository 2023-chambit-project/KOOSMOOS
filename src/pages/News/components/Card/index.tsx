import { SpringMotionBox } from '@/components'
import type { SnippetProps } from '@/types'
import type { FC } from 'react'
import * as S from './Card.styles'

interface Props {
  snippet: SnippetProps
}

export const NewsCard: FC<Props> = ({ snippet }) => {
  return (
    <S.CardContainer>
      <SpringMotionBox>
        <S.ThumbnailImage src={snippet.thumbnails.high.url} />
        <S.Title dangerouslySetInnerHTML={{ __html: snippet.title }} />
      </SpringMotionBox>
    </S.CardContainer>
  )
}
