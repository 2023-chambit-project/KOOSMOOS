import type { FC } from 'react'
import * as S from './Stage.styles'
import type { Props } from './Stage.types'

export const Stage: FC<Props> = ({ imageAlign, stageBgColors, planetImageSrc, isImgAnimating }) => {
  return (
    <S.StageWrapper align={imageAlign} $bgColors={[...stageBgColors]}>
      <S.StardustPattern />
      <S.StageSymbolImage src={planetImageSrc} $isImgAnimating={isImgAnimating} />
    </S.StageWrapper>
  )
}
