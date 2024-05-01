import type { AlignProp } from '../Game.types'
export interface StageProps {
  stageName: string
  distanceFromEarth: string
  stageBgColors: Array<string>
  planetImageSrc: string
  imageAlign: AlignProp
  planetThemeColor: string
  isImgAnimating: boolean
}
