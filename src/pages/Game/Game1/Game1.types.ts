import type { FlagProp, MoonProp } from '@/types'

export type ViewTypeProp = 'general' | 'magnification'

export interface FlagListProp {
  flagList: FlagProp[]
}

export interface MoonShapeProp {
  moonShape: MoonProp
}

export interface PosXYProp {
  posX: number
  posY: number
}
