import { createFlagTemplate } from '@/pages/Game/Game1/Game1.constants'
import type { FlagProp } from '@/types'
import { atom } from 'recoil'

export const newFlagFormAtom = atom<FlagProp>({
  key: 'newFlagFormAtom',
  default: createFlagTemplate,
})
