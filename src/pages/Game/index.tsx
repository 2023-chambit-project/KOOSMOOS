import * as S from './Game.styles'
import { AlignedArea, SideOpenDescription } from './components'

const GameMainPage = () => {
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
