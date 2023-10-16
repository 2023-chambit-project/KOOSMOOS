import { FC } from 'react'
import * as S from './Game.styles'
import { AlignedArea, SideOpenDescription } from './components'

const GameMainPage: FC = () => {
  return (
    <S.DividedArea>
      <AlignedArea align="left">
        <SideOpenDescription align="left" />
      </AlignedArea>
      <AlignedArea align="right">
        <SideOpenDescription align="right" />
      </AlignedArea>
    </S.DividedArea>
  )
}

export default GameMainPage
