import { curFlagIndexAtom } from '@/atoms/curFlagIndex.atom'
import { flagListAtom } from '@/atoms/flagList.atom'
import { moonShapeAtom } from '@/atoms/moonShape.atom'
import { sidePanelModeAtom } from '@/atoms/sidePanelMode.atom'
import { viewTypeAtom } from '@/atoms/viewType.atom'
import type { PanelModeProp, ViewTypeProp } from '@/pages/Game/Game1/Game1.types'
import { getPointerProps } from '@/pages/Game/Game1/helpers/getPointerPropsHelper'
import { FlagProp, MoonProp } from '@/types'
import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './Pointer.styles'

export const Pointer = () => {
  /* 👇 포인터 좌표와 포인터에 표시될 text 정보를 담은 상태입니다. */
  const [flagList] = useRecoilState<FlagProp[]>(flagListAtom)
  const [curFlagIndex] = useRecoilState<number>(curFlagIndexAtom)
  const [panelMode] = useRecoilState<PanelModeProp>(sidePanelModeAtom)
  const [moonShape] = useRecoilState<MoonProp>(moonShapeAtom)
  /* 👇 포인터 클릭시, viewType 을 변환합니다. */
  const [, setViewType] = useRecoilState<ViewTypeProp>(viewTypeAtom)

  const { gapTop, gapLeft, mainColor } = getPointerProps(
    flagList[curFlagIndex].posX,
    flagList[curFlagIndex].posY,
    moonShape,
  )

  const isPanelModeObservation = useCallback(() => {
    return panelMode === 'observation'
  }, [panelMode])

  return (
    <S.Pointer
      key={flagList[curFlagIndex].posX + flagList[curFlagIndex].posY}
      {...{ gapLeft }}
      {...{ gapTop }}
      {...{ mainColor }}
      onClick={() => {
        isPanelModeObservation() && setViewType('magnification')
      }}
    >
      {isPanelModeObservation() && <S.EncouragingText>Click!!</S.EncouragingText>}
      {flagList[curFlagIndex].writer[0]}
    </S.Pointer>
  )
}
