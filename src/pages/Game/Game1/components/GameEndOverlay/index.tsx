import { Button } from '@/components'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import type { FC } from 'react'
import * as S from './GameEndOverlay.styles'
import type { Props } from './GameEndOverlay.types'

export const GameEndOverlay: FC<Props> = ({
  score,
  planetThemeColor,
  planetImageSrc,
  stageName,
  distanceFromEarth,
}) => {
  const onClickRevertButton = () => {
    window.location.reload()
  }
  return (
    <S.Container>
      <S.MainCard>
        <S.ScoreContainer>
          <h3>Score :</h3>
          <S.Score>{score}</S.Score>
        </S.ScoreContainer>
        <S.ImageContainer $bgColor={planetThemeColor}>
          <S.AbsoluteImage src={planetImageSrc} />
          <S.DestinationText>{stageName}</S.DestinationText>
        </S.ImageContainer>
        <S.DistanceFromEarthText>{` * 지구로부터 거리 : ${distanceFromEarth}`}</S.DistanceFromEarthText>
        <Button variant="outlined" icon={faRotateLeft} onClick={onClickRevertButton}>
          다시하기
        </Button>
      </S.MainCard>
    </S.Container>
  )
}
