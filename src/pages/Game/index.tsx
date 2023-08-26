import { FC } from 'react'
import * as S from './Game.styles'
import { AlignedArea } from './components/AlignedBox'
import { ColorPalette } from './components/ColorPalette'

const GameMainPage: FC = () => {
  return (
    <S.DividedArea>
      <AlignedArea align="left">
        <ColorPalette align="left" />
      </AlignedArea>
      <AlignedArea align="right">
        <ColorPalette align="right" />
      </AlignedArea>
    </S.DividedArea>
  )
}

export default GameMainPage
