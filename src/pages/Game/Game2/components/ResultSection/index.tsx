import { useLoading } from '@/hooks'
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

  const onClickCopyGameLink = async () => {
    try {
      await navigator.clipboard.writeText('http://localhost:5173/game/2') // 배포 주소에 맞게 변경해야 합니다.
      alert('복사가 완료되었습니다')
    } catch (err) {
      alert('잠시후 다시 시도해주세요')
    }
  }

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
            <S.Button color="purple">결과 이미지 다운로드하기 🪄</S.Button>
          </S.ButtonWrap>
          <S.Copy onClick={onClickCopyGameLink}>검사하기 링크를 공유해보세요!</S.Copy>
        </S.Main>
      )}
    </S.Container>
  )
}
