import { theme } from '@/styles'
import type { MoonProp } from '@/types'
import { moonRadius } from '../Game1.constants'
import { coordinateValidate } from './createFlagFormHelper'

/**
 * @params
 * - posX: 좌표 중 경도값 (좌/우, -90~90)
 * - posY: 좌표 중 위도값 (상/하, -90~90)
 * - moonShape: 달의 위상 정보
 *
 * @outputs
 * - gapTop: posY(-90 ~ 90, 경계값 포함) 범위를 (0 ~ 100, 경계값 포함) 범위로 치환하여, 정사각형의 상단으로부터 이격된 거리
 * - gapLeft: posX(-90 ~ 90, 경계값 포함) 범위를 (0 ~ 100, 경계값 포함) 범위로 치환하여, 정사각형의 좌측으로부터 이격된 거리
 * - mainColor:
 * @description
 * - 좌표값과 특정 하루의 달 위상 정보값을 입력받아, 정사각형의 상단과 좌측으로부터 이격된 거리와 포인터 색상을 출력한다.
 * - ### 좌표 정보가 잘못된 경우
 *   - 포인터 색상: error
 *   - 달의 그림자 영역에 좌표가 포함된 경우
 *      - 포인터 위치: 정사각형의 상단과 좌측으로부터 이격된 거리
 *   - 달(원판)의 영역을 벗어난 경우
 *      - 포인터 위치: 정사각형의 중심
 * - ### 좌표 정보가 올바른 경우
 *   - 포인터 위치: 정사각형의 상단과 좌측으로부터 이격된 거리
 *   - 판넬모드가 'observation' 인 경우
 *      - 포인터 색상: orange(posX+posY=짝수) or blue(posX+posY=홀수)
 *   - 판넬모드가 'observation' 가 아닌 경우
 *      - 포인터 색상: success
 */
export const getPointerProps = (posX: number, posY: number, moonShape: MoonProp, isPanelModeObservation: boolean) => {
  /** 잘못된 좌표가 입력될 시, pointer 는 부모 요소의 가운데로, pointer 색상은 error */
  if (coordinateValidate(posX, posY, moonShape)) {
    const mainColor = theme.COLOR.alert[100]
    /** 그래도 원 안 쪽이라면, 입력받은 좌표 표시 */
    if (Math.pow(posX, 2) + Math.pow(posY, 2) <= Math.pow(moonRadius, 2))
      return { ...parseGap(posX, posY), mainColor: mainColor }
    /** 원 외부로 나가 버릴 경우, 포인터는 원의 정 가운데서 표시 */
    return { gapTop: 50, gapLeft: 50, mainColor: mainColor }
  }
  /** 좌표 정보가 올바른 경우 */
  let mainColor: string = theme.COLOR.success
  if (isPanelModeObservation) {
    mainColor = (posX + posY) % 2 == 0 ? theme.PALETTE.orange[100] : theme.PALETTE.blue[100]
  }
  return { ...parseGap(posX, posY), mainColor }
}
/** 원점이 (0,0)을 기준인 좌표값를 부모 요소의 좌상단(top,left) 으로부터의 이격률(%) 로 변환 */
const parseGap = (posX: number, posY: number) => {
  const gapTop = ((moonRadius - posY) / (moonRadius * 2)) * 100
  const gapLeft = ((moonRadius * 2 + (posX - moonRadius)) / (moonRadius * 2)) * 100
  return { gapTop, gapLeft }
}
