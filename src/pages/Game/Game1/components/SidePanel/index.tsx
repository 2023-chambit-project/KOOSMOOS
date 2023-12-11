import { sidePanelModeAtom } from '@/atoms/sidePanelMode.atom'
import { Button } from '@/components'
import { useGetGame1Flags } from '@/services'
import { faCloudMoon, faPenAlt } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil'
import { moonShapeToKorean } from '../../Game1.constants'
import type { PanelModeProp } from '../../Game1.types'
import * as S from './SidePanel.styles'
import { FlagAddingForm, VerticalList } from './components'

export const SidePanel = () => {
  const { data } = useGetGame1Flags()
  const [panelMode, setPanelMode] = useRecoilState<PanelModeProp>(sidePanelModeAtom)
  return (
    <S.Container>
      <S.HeadingText>
        오늘 밤은
        <S.PointText>{moonShapeToKorean[data!.moonShape]}</S.PointText> 입니다!
      </S.HeadingText>
      <S.Divider />
      <S.PanelContentWrapper key={panelMode}>
        {panelMode === 'observation' ? <VerticalList /> : <FlagAddingForm />}
      </S.PanelContentWrapper>
      <S.Divider />
      <Button
        variant="outlined"
        round="slightly"
        bgColor="transparent"
        icon={panelMode === 'observation' ? faPenAlt : faCloudMoon}
        onClick={() => {
          setPanelMode(panelMode === 'observation' ? 'decoration' : 'observation')
        }}
      >
        {panelMode === 'observation' ? '깃발 만들기' : '인사글 보러가기'}
      </Button>
    </S.Container>
  )
}
