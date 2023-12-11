import { curFlagIndexAtom } from '@/atoms/curFlagIndex.atom'
import { newFlagFormAtom } from '@/atoms/newFlagForm.atom'
import { sidePanelModeAtom } from '@/atoms/sidePanelMode.atom'
import { viewTypeAtom } from '@/atoms/viewType.atom'
import type { PanelModeProp, ViewTypeProp } from '@/pages/Game/Game1/Game1.types'
import { getPointerProps } from '@/pages/Game/Game1/helpers/getPointerPropsHelper'
import { useGetGame1Flags } from '@/services'
import type { FlagProp } from '@/types'
import { useMemo } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import * as S from './Pointer.styles'

export const Pointer = () => {
  const { data } = useGetGame1Flags()
  const newFlag = useRecoilValue<FlagProp>(newFlagFormAtom)

  const curFlagIndex = useRecoilValue<number>(curFlagIndexAtom)
  const panelMode = useRecoilValue<PanelModeProp>(sidePanelModeAtom)
  const setViewType = useSetRecoilState<ViewTypeProp>(viewTypeAtom)

  /**
   * @description
   * - 현재 판넬 모드가 'observation' 이라면 true 를 반환합니다.
   * - 리렌더링이 자주 일어나는 컴포넌트임으로 useMemo 훅을 사용했습니다.
   */
  const isPanelModeObservation = useMemo(() => {
    return panelMode === 'observation'
  }, [panelMode])

  /**
   * @description
   * - 현재 판넬 모드가 'observation' 이라면, 캐시 메모리에 있는 깃발 정보의 값을 할당받습니다.
   * - 현재 판넬 모드가 'observation' 이라면, 전역상태로 관리되는 깃발 정보(newFlagFormAtom) 의 값을 할당받습니다.
   */
  const pointerInfo = isPanelModeObservation
    ? {
        posX: data!.flagList[curFlagIndex].posX,
        posY: data!.flagList[curFlagIndex].posY,
        writer: data!.flagList[curFlagIndex].writer[0],
        moonShape: data!.moonShape,
      }
    : { posX: newFlag.posX, posY: newFlag.posY, writer: newFlag.writer[0], moonShape: data!.moonShape }

  const { gapTop, gapLeft, mainColor } = getPointerProps(
    pointerInfo.posX,
    pointerInfo.posY,
    pointerInfo.moonShape,
    isPanelModeObservation,
  )

  return (
    <S.Pointer
      key={pointerInfo.posX + pointerInfo.posY}
      gapTop={gapTop}
      gapLeft={gapLeft}
      mainColor={mainColor}
      onClick={() => {
        isPanelModeObservation && setViewType('magnification')
      }}
    >
      {isPanelModeObservation && <S.EncouragingText>Click!!</S.EncouragingText>}
      {pointerInfo.writer}
    </S.Pointer>
  )
}
