import RocketAnimation from '@/assets/lottie/rocket.json'
import Lottie from 'lottie-react'
import type { FC } from 'react'
import type { SectionProps } from '../../Game2.types'
import * as S from './IntroSection.styles'

export const IntroSection: FC<SectionProps> = ({ onNextState }) => {
  return (
    <S.Container>
      <S.explainText>행성으로 알아보는 성격유형 테스트</S.explainText>
      <S.Title>
        내가 <S.PointText>행성</S.PointText>이라면
        <br />
        나는 어떤 행성?
      </S.Title>
      <S.AnimationBox>
        <Lottie animationData={RocketAnimation} width={'100%'} height={'100%'} />
      </S.AnimationBox>
      <S.Button onClick={onNextState}>행성mbti 검사하러 가기 🚀</S.Button>
    </S.Container>
  )
}
