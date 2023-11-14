import type { MoonProp } from '@/types'
import { atom } from 'recoil'

export const moonShapeAtom = atom<MoonProp>({
  key: 'moonShapeAtom',
  default: 'fullMoon',
})
