import type { FC } from 'react'
import * as S from './Stage.styles'
import type { Props } from './Stage.types'

export const Stage: FC<Props> = (props) => {
  return (
    <S.StageWrapper align={props.imageAlign} $bgColors={[...props.stageBgColors]}>
      <S.StardustPattern />
      <S.StageSymbolImage src={props.planetImageSrc} $isImgAnimating={props.isImgAnimating} />
    </S.StageWrapper>
  )
}
