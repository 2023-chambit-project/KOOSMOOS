import { FC } from 'react'
import * as S from './Game.styles'
import { AlignedArea } from './components/AlignedBox'
import { SideOpenDescription } from './components/SideOpenDescription'

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
