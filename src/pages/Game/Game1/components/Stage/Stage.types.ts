import type { AlignProp } from '@/pages/Game/Game.types'

export interface Props {
  imageAlign: AlignProp
  planetImageSrc: string
  stageBgColors: Array<string>
  isImgAnimating: boolean
}
