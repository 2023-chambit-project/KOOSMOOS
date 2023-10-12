import { coordinateLocation } from '@/atoms/coordinateLocation.atom'
import type { LocationProp } from '@/pages/Game/Game1/Game1.types'
import { useRecoilState } from 'recoil'
import * as S from './Pointer.styles'

export const Pointer = () => {
  const [coordinate] = useRecoilState<LocationProp>(coordinateLocation)
  return (
    <S.Pointer key={coordinate.posX + coordinate.posY} posX={coordinate.posX} posY={coordinate.posY}>
      ★
    </S.Pointer>
  )
}
