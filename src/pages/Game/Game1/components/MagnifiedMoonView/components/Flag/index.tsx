import type { FlagProp } from '@/types'
import type { FC } from 'react'
import * as S from './Flag.styles'
import Fixture from '/public/assets/game/game1/Fixture.svg'

export const Flag: FC<FlagProp> = ({ greeting, img_src, writer }) => {
  return (
    <S.FlagContainer>
      <S.FlagImageWrapper>
        <S.BackLight />
        <S.FlagImage src={img_src} />
        <S.Fixture src={Fixture} />
        <S.TextWrapper>
          <S.GreetingText>{greeting}</S.GreetingText>
          <S.UserNicknameText>{writer}</S.UserNicknameText>
        </S.TextWrapper>
      </S.FlagImageWrapper>
    </S.FlagContainer>
  )
}
