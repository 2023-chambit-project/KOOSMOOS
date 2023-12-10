import { ButtonV2 } from '@/components/ButtonV2'
import { theme } from '@/styles'
import * as S from './NotFound.styles'
import LostAstronaut from '/assets/img/lost_astronaut.webp'

const NotFoundPage = () => {
  return (
    <S.Wrapper>
      <S.TextImgContainer>
        <S.TextSection>
          <S.HeadingText>404</S.HeadingText>

          <S.SubText>이런.. 길을 잃었습니다..</S.SubText>
          <S.SubText>KOOSMOOS 기지로 복귀해주세요..</S.SubText>
          <br />

          <S.ButtonContainer>
            <ButtonV2 icon={'google-drive'} bgColor={theme.PALETTE.orange[100]} variant="outlined">
              Main 페이지로..
            </ButtonV2>
            <ButtonV2 icon={'google-drive'} bgColor="transparent" skin="dark" variant="outlined">
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
