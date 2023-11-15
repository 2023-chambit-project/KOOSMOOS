import { theme } from '@/styles'
import { MoonProp } from '@/types'
import { moonRadius } from '../Game1.constants'
import { coordinateValidate } from './createFlagFormHelper'

export const getPointerProps = (posX: number, posY: number, moonShape: MoonProp) => {
  /** 잘못된 좌표가 입력될 시, pointer 는 부모 요소의 가운데로, pointer 색상은 error */
  if (coordinateValidate(posX, posY, moonShape)) return { gapTop: 50, gapLeft: 50, mainColor: theme.COLOR.alert[100] }
  /** 원점이 (0,0)을 기준인 좌표값를 부모 요소의 좌상단(top,left) 으로부터의 이격률(%) 로 변환 */
  const gapTop = ((moonRadius - posY) / (moonRadius * 2)) * 100
  const gapLeft = ((moonRadius * 2 + (posX - moonRadius)) / (moonRadius * 2)) * 100
  /** 좌표값의 합이 짝수면 파란색 출력, 홀수면 주황색 출력 */
  const mainColor = (posX + posY) % 2 == 0 ? theme.PALETTE.blue[100] : theme.PALETTE.orange[100]
  return { gapTop, gapLeft, mainColor }
}
