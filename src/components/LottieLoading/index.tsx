import Lottie from 'lottie-react'
import * as S from './LottieLoading.styles'

interface Props {
  title: string
  lottie: unknown
  bgColor?: string
  wrapperColor?: string
  color?: string
}

export const LottieLoading = (props: Props) => {
  return (
    <S.Container $bgColor={props.bgColor} $color={props.color}>
      <S.Title>{props.title}</S.Title>
      <S.LottieWrapper $wrapperColor={props.wrapperColor}>
        <Lottie animationData={props.lottie} />
      </S.LottieWrapper>
    </S.Container>
  )
}
