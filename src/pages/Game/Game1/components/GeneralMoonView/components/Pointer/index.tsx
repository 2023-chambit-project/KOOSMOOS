import { coordinateLocation } from '@/atoms/coordinateLocation.atom'
import { sidePanelModeAtom } from '@/atoms/sidePanelMode.atom'
import { viewTypeAtom } from '@/atoms/viewType.atom'
import type { PanelModeProp, PointerProp, ViewTypeProp } from '@/pages/Game/Game1/Game1.types'
import { useRecoilState } from 'recoil'
import * as S from './Pointer.styles'

export const Pointer = () => {
  /* 👇 포인터 좌표와 포인터에 표시될 text 정보를 담은 상태입니다. */
  const [coordinate] = useRecoilState<PointerProp>(coordinateLocation)
  /* 👇 달 표면에 깃발을 관측하는 중인지, 자신만의 깃발을 꾸미는 중인지 상태를 확인합니다.*/
  const [panelMode] = useRecoilState<PanelModeProp>(sidePanelModeAtom)
  /* 👇 포인터 클릭시, viewType 을 변환합니다. */
  const [, setViewType] = useRecoilState<ViewTypeProp>(viewTypeAtom)
  return (
    <S.Pointer
      key={coordinate.posX + coordinate.posY}
      posX={coordinate.posX}
      posY={coordinate.posY}
      onClick={() => {
        setViewType('magnification')
      }}
    >
      {panelMode === 'observation' ? <S.EncouragingText>Click!!</S.EncouragingText> : <></>}
      {coordinate.content}
    </S.Pointer>
  )
}
