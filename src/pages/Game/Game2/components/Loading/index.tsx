import Satellite from '@/assets/lottie/satellite.json'
import Lottie from 'lottie-react'
import * as S from './Loading.styles'

export const LoadingSection = () => {
  return (
    <S.Container>
      <S.Title>분석중...</S.Title>
      <S.Spinner>
        <Lottie animationData={Satellite} />
      </S.Spinner>
    </S.Container>
  )
}
