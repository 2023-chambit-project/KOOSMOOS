import Lottie from 'lottie-react'
import type { FC } from 'react'
import * as S from './LottieLoading.styles'
import type { Props } from './LottieLoading.types'

export const LottieLoading: FC<Props> = (props) => {
  return (
    <S.Container $bgColor={props.bgColor} $color={props.color}>
      <S.Title>{props.title}</S.Title>
      <S.LottieWrapper $wrapperColor={props.wrapperColor}>
        <Lottie animationData={props.lottie} />
      </S.LottieWrapper>
    </S.Container>
  )
}
