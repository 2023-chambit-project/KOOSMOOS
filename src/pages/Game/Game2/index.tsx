import LocketAnimation from '@/assets/lottie/locket.json'
import Lottie from 'lottie-react'
import * as S from './Game2.styles'

const Game2Page = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.explainText>행성으로 알아보는 성격유형 테스트</S.explainText>
        <S.Title>
          내가 <S.PointText>행성</S.PointText>이라면
          <br />
          나는 어떤 행성?
        </S.Title>
        <S.AnimationBox>
          <Lottie animationData={LocketAnimation} width={'100%'} height={'100%'} />
        </S.AnimationBox>
        <S.Button>행성mbti 검사하러 가기 🚀</S.Button>
      </S.Container>
    </S.Wrapper>
  )
}

export default Game2Page
