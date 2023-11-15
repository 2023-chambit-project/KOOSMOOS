import { theme } from '@/styles'
import { moonRadius } from '../Game1.constants'

export const getColorByParityOfSum = (num1: number, num2: number) => {
  if ((num1 + num2) % 2 == 0) return theme.PALETTE.blue[100]
  return theme.PALETTE.orange[100]
}

/** 원점이 (0,0)을 기준인 좌표값를 부모 요소의 좌상단(top,left) 으로부터의 이격률(%) 로 변환 */
export const coordinateSystemConversion = (posX: number, posY: number) => {
  const gapTop = ((moonRadius - posY) / (moonRadius * 2)) * 100
  const gapLeft = ((moonRadius + posX) / (moonRadius * 2)) * 100
  return { gapTop, gapLeft }
}
