import type { PanelModeProp } from '@/pages/Game/Game1/Game1.types'
import { atom } from 'recoil'

export const sidePanelModeAtom = atom<PanelModeProp>({
  key: 'sidePanelModeAtom',
  default: 'observation',
})
