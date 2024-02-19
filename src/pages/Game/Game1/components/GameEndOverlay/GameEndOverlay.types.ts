import type { StageProps } from '../../Game1.types'

export interface Props
  extends Pick<StageProps, 'planetThemeColor' | 'planetImageSrc' | 'stageName' | 'distanceFromEarth'> {
  score: number
}
