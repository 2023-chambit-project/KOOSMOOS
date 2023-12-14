import type { ViewTypeProp } from '@/pages/Game/Game1/Game1.types'
import { atom } from 'recoil'

export const viewTypeAtom = atom<ViewTypeProp>({
  key: 'viewTypeAtom',
  default: 'general',
})
