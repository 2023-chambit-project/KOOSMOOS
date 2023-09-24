import TeleScope from '@/assets/lottie/telescope.json'
import Lottie from 'lottie-react'
import * as S from './Loading.styles'
export const Loading = () => {
  return (
    <S.YellowGround>
      <S.CenterCircle>
        <Lottie animationData={TeleScope} style={{ width: '130%' }} />
      </S.CenterCircle>
      <S.LoadingText>망원경 준비 중..</S.LoadingText>
    </S.YellowGround>
  )
}
