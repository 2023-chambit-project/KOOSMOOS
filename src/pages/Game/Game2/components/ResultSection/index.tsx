import { useLoading } from '@/hooks/useLoading'
import type { PostGame2Response } from '@/types'
import { type FC } from 'react'
import type { SectionProps } from '../../Game2.types'
import { LoadingSection } from '../Loading'
import * as S from './Result.styles'

interface Props extends SectionProps {
  result: PostGame2Response['resultImageSrc']
}

export const ResultSection: FC<Props> = ({ onNextState, result }) => {
  const { loading } = useLoading(3500)

  return (
    <S.Container>
      {loading && <LoadingSection />}
      {!loading && (
        <S.Main>
          <S.ResultImg src={result} />
          <S.ButtonWrap>
            <S.Button color="gray" onClick={onNextState}>
              행성 성격 검사 다시하기
            </S.Button>
            <S.Button color="purple">행성 이미지 저장하기 🪄</S.Button>
          </S.ButtonWrap>
        </S.Main>
      )}
    </S.Container>
  )
}
