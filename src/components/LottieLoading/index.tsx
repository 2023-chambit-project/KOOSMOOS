import Lottie from 'lottie-react'
import type { FC } from 'react'
import * as S from './LottieLoading.styles'
import type { Props } from './LottieLoading.types'

export const LottieLoading: FC<Props> = ({ bgColor, color, title, wrapperColor, lottie }) => {
  return (
    <S.Container $bgColor={bgColor} $color={color}>
      <S.Title>{title}</S.Title>
      <S.LottieWrapper $wrapperColor={wrapperColor}>
        <Lottie animationData={lottie} />
      </S.LottieWrapper>
    </S.Container>
  )
}
