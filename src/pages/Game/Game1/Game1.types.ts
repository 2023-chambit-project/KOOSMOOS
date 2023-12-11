import type { FlagProp, MoonProp } from '@/types'

export type ViewTypeProp = 'general' | 'magnification'
export type PanelModeProp = 'observation' | 'decoration'
export interface FlagListProp {
  flagList: FlagProp[]
}
export interface MoonShapeProp {
  moonShape: MoonProp
}
export interface PointerProp {
  $gapTop: number
  $gapLeft: number
  $mainColor: string
}
