export type MbtiProp = 'E' | 'I' | 'N' | 'S' | 'F' | 'T' | 'P' | 'J'

export interface PostGame2ResultReqBody {
  answers: MbtiProp[]
}

export interface PostGame2Response {
  resultImageSrc: string
}
