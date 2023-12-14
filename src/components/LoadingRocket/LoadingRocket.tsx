import LOADING_ROCKET from '@/assets/lottie/loading_rocket.json'
import Lottie from 'lottie-react'
import * as S from './LoadingRocket.styles'

export const LoadingRocket = () => {
  return (
    <S.Container>
      <S.LoadingSection>
        <Lottie animationData={LOADING_ROCKET} />
      </S.LoadingSection>
    </S.Container>
  )
}
