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
  posX: number
  posY: number
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

export interface FlagForm extends Omit<FlagProp, 'id' | 'img_src'> {}

export interface PostGame1FlagReqBody {
  flagInfo: FlagForm
}
