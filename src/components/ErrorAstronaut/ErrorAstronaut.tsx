import { useNavigate } from 'react-router-dom'
import * as S from './ErrorAstronaut.styles'
import ERROR_ASTRONAUT from '/assets/img/error_astronaut.png'

export const ErrorAstronaut = () => {
  const navigate = useNavigate()

  const onClickGoToHome = () => {
    navigate('/')
  }

  return (
    <S.Container>
      <img src={ERROR_ASTRONAUT} width="300px" />
      <S.AlertSection>
        <S.TextSection>
          <S.AlertHeading>일시적인 오류입니다.</S.AlertHeading>
          <S.AlertText>잠시 후에 다시 시도해주세요.</S.AlertText>
        </S.TextSection>
        <S.ReturnButton onClick={onClickGoToHome}>홈 화면으로 이동하기</S.ReturnButton>
      </S.AlertSection>
    </S.Container>
  )
}
