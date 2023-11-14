import type { FlagProp } from '@/types'
import { atom } from 'recoil'

export const flagListAtom = atom<FlagProp[]>({
  key: 'flagListAtom',
  default: [],
})
