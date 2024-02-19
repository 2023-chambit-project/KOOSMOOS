import type { AlignProp } from '@/pages/Game/Game.types'

import * as S from './Stage.styles'

interface Props {
  imageAlign: AlignProp
  planetImageSrc: string
  stageBgColors: Array<string>
  isImgAnimating: boolean
}

export const Stage = (props: Props) => {
  return (
    <S.StageWrapper align={props.imageAlign} $bgColors={[...props.stageBgColors]}>
      <S.StardustPattern />
      <S.StageSymbolImage src={props.planetImageSrc} $isImgAnimating={props.isImgAnimating} />
    </S.StageWrapper>
  )
}
