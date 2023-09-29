import { FlagProp } from '@/types'
import { FC } from 'react'
import * as S from './Flag.styles'

const Flag: FC<FlagProp> = ({ img_src, writer, greeting }) => {
  return (
    <S.Container>
      <S.FlagImageWrapper>
        <S.FlagImage src={img_src} alt="flag background Image" />
        <S.Fixture direction="topLeft" src="/public/assets/game/fixture/TopFixture.svg" />
        <S.Fixture direction="topRight" src="/public/assets/game/fixture/TopFixture.svg" />
        <S.Fixture direction="bottomLeft" src="/public/assets/game/fixture/BottomFixture.svg" />
        <S.Fixture direction="bottomRight" src="/public/assets/game/fixture/BottomFixture.svg" />
      </S.FlagImageWrapper>
      <S.TextWrapper>
        <S.GreetingText>{greeting}</S.GreetingText>
        <S.UserNicknameText>{writer}</S.UserNicknameText>
      </S.TextWrapper>
    </S.Container>
  )
}
export default Flag
