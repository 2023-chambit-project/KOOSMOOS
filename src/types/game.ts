export type MbtiProp = 'E' | 'I' | 'N' | 'S' | 'F' | 'T' | 'P' | 'J'

export interface PostGame2ResultReqBody {
  answers: MbtiProp[]
}

export interface PostGame2Response {
  resultImageSrc: string
}

export interface FlagProp {
  id: number
  writer: string
  greeting: string
  img_src: string
}

export type MoonProp =
  | 'newMoon'
  | 'waxingCrescent'
  | 'firstQuarter'
  | 'waxingGibbous'
  | 'fullMoon'
  | 'waningGibbous'
  | 'thirdQuarter'
  | 'waningCrescent'

export interface FlagGame1Response {
  moonShape: MoonProp
  flagList: FlagProp[]
}
