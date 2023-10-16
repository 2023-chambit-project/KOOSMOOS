import type { PointerProp } from '@/pages/Game/Game1/Game1.types'
import { atom } from 'recoil'

export const coordinateLocation = atom<PointerProp>({
  key: 'coordinateLocation',
  default: {
    posX: 0,
    posY: 0,
    content: '★',
  },
})
