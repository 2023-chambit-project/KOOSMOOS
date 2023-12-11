import { theme } from '@/styles'
import Lottie from 'lottie-react'
import type { FC } from 'react'
import * as S from './Loading.styles'

interface Props {
  lottieAnimation: unknown
  text: string
  $bgColor?: string
  $circleColor?: string
  $textColor?: string
}

export const LoadingPage: FC<Props> = ({
  lottieAnimation,
  text,
  $bgColor = theme.PALETTE.yellow[100],
  $circleColor = theme.PALETTE.yellow[70],
  $textColor = theme.COLOR.common.black,
}) => {
  return (
    <S.Background $bgColor={$bgColor}>
      <S.CenterCircle $circleColor={$circleColor}>
        <Lottie animationData={lottieAnimation} style={{ width: '100%' }} />
      </S.CenterCircle>
      <S.LoadingText $textColor={$textColor}>{text}</S.LoadingText>
    </S.Background>
  )
}
