import type { LocationProp } from '@/pages/Game/Game1/Game1.types'
import { atom } from 'recoil'

export const coordinateLocation = atom<LocationProp>({
  key: 'coordinateLocation',
  default: {
    posX: 0,
    posY: 0,
  },
})
