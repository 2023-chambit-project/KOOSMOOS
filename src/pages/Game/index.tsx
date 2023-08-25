import { Button } from '@/components'
import { FC } from 'react'
import * as S from './Game.styles'
import { Modal } from './components/Modal/index'
import * as C from './constants/texts'

const GameMainPage: FC = () => {
  return (
    <S.DividedArea>
      <S.HalfBox align="left">
        <S.ThumbnailImg src="assets/img/FlagMoon.svg" />
        <Modal align="left"></Modal>
        <S.TitleAndButton align="left">
          <h1>{C.Title.left}</h1>
          <Button variant="ghost" size="fit" onClick={() => {}}>
            {C.ButtonText}
          </Button>
        </S.TitleAndButton>
      </S.HalfBox>
      <S.HalfBox align="right">
        <S.ThumbnailImg src="assets/img/CelestialBodies.svg" />
        <Modal align="right"></Modal>
        <S.TitleAndButton align="right">
          <h1>{C.Title.right}</h1>
          <Button variant="ghost" size="fit" onClick={() => {}}>
            {C.ButtonText}
          </Button>
        </S.TitleAndButton>
      </S.HalfBox>
    </S.DividedArea>
  )
}

export default GameMainPage
