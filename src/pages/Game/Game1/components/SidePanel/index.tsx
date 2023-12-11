import { moonShapeAtom } from '@/atoms/moonShape.atom'
import { sidePanelModeAtom } from '@/atoms/sidePanelMode.atom'
import { ButtonV2 } from '@/components/ButtonV2'
import type { MoonProp } from '@/types'
import { faCloudMoon, faPenAlt } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { useRecoilState } from 'recoil'
import { moonShapeToKorean } from '../../Game1.constants'
import type { PanelModeProp } from '../../Game1.types'
import * as S from './SidePanel.styles'
import { FlagAddingForm, VerticalList } from './components'

export const SidePanel: FC = () => {
  const [panelMode, setPanelMode] = useRecoilState<PanelModeProp>(sidePanelModeAtom)
  const [moonShape] = useRecoilState<MoonProp>(moonShapeAtom)
  return (
    <S.Container>
      <S.HeadingText>
        오늘 밤은
        <S.PointText>{moonShapeToKorean[moonShape]}</S.PointText> 입니다!
      </S.HeadingText>
      <S.Divider />
      <S.PanelContentWrapper key={panelMode}>
        {panelMode === 'observation' ? <VerticalList /> : <FlagAddingForm />}
      </S.PanelContentWrapper>
      <S.Divider />
      <ButtonV2
        variant="outlined"
        round="slightly"
        bgColor="transparent"
        icon={panelMode === 'observation' ? faPenAlt : faCloudMoon}
        onClick={() => {
          setPanelMode(panelMode === 'observation' ? 'decoration' : 'observation')
        }}
      >
        {panelMode === 'observation' ? '깃발 만들기' : '인사글 보러가기'}
      </ButtonV2>
    </S.Container>
  )
}
