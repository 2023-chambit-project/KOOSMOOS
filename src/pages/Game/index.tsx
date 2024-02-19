import type { FC } from 'react'
import * as S from './Game.styles'
import { AlignedArea, SideOpenDescription } from './components'

const GameMainPage: FC = () => {
  return (
    <S.DividedArea>
      <AlignedArea horizontalAlign="left">
        <SideOpenDescription horizontalAlign="left" />
      </AlignedArea>
      <AlignedArea horizontalAlign="right">
        <SideOpenDescription horizontalAlign="right" />
      </AlignedArea>
    </S.DividedArea>
  )
}

export default GameMainPage
