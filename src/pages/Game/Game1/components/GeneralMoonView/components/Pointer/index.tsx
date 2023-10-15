import { coordinateLocation } from '@/atoms/coordinateLocation.atom'
import type { PointerProp } from '@/pages/Game/Game1/Game1.types'
import { useRecoilState } from 'recoil'
import * as S from './Pointer.styles'

export const Pointer = () => {
  const [coordinate] = useRecoilState<PointerProp>(coordinateLocation)
  return (
    <S.Pointer
      key={coordinate.posX + coordinate.posY}
      posX={coordinate.posX}
      posY={coordinate.posY}
      onClick={() => {
        alert('touch')
      }}
    >
      {coordinate.content}
    </S.Pointer>
  )
}
