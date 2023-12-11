import { ButtonV2 } from '@/components/ButtonV2'
import { theme } from '@/styles'
import { useNavigate } from 'react-router-dom'
import * as S from './NotFound.styles'
import LostAstronaut from '/assets/img/lost_astronaut.webp'

const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <S.Wrapper>
      <S.TextImgContainer>
        <S.TextSection>
          <S.HeadingText>404</S.HeadingText>

          <S.SubText>이런.. 길을 잃었습니다..</S.SubText>
          <S.SubText>KOOSMOOS 기지로 복귀해주세요..</S.SubText>
          <br />

          <S.ButtonContainer>
            <ButtonV2
              bgColor={theme.PALETTE.orange[100]}
              skin="dark"
              variant="outlined"
              onClick={() => {
                navigate('/')
              }}
            >
              메인 페이지로..
            </ButtonV2>
            <ButtonV2
              bgColor={theme.COLOR.common.gray[100]}
              skin="dark"
              variant="outlined"
              onClick={() => {
                navigate(-1)
              }}
            >
              이전 페이지로..
            </ButtonV2>
          </S.ButtonContainer>
        </S.TextSection>

        <S.SymbolImage src={LostAstronaut} />
      </S.TextImgContainer>
    </S.Wrapper>
  )
}

export default NotFoundPage
