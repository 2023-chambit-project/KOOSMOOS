import { sidePanelModeAtom } from '@/atoms/sidePanelMode.atom'
import { ButtonV2 } from '@/components/ButtonV2'
import { Icon } from '@/components/Icon'
import { faCloudMoon, faExclamationCircle, faPenAlt } from '@fortawesome/free-solid-svg-icons'
import { FC } from 'react'
import { useRecoilState } from 'recoil'
import type { FlagListProp, PanelModeProp } from '../../Game1.types'
import * as S from './SidePanel.styles'
import { FlagAddingForm, VerticalList } from './components'

export const SidePanel: FC<FlagListProp> = ({ flagList }) => {
  const [panelMode, setPanelMode] = useRecoilState<PanelModeProp>(sidePanelModeAtom)

  return (
    <S.Container>
      <S.HeadingText>
        # 오늘 밤은 <S.PointText>보름달</S.PointText> 입니다!
      </S.HeadingText>
      <S.Divider />
      <S.PanelContentWrapper key={panelMode}>
        {panelMode === 'observation' ? <VerticalList flagList={flagList} /> : <FlagAddingForm />}
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
      <S.TrivialInfoContainer>
        <S.TrivialInfoInfoHeading>
          <Icon icon={faExclamationCircle} />
          그거 아시나요?
        </S.TrivialInfoInfoHeading>
        <S.TrivialInfoInfoBody>
          아리랑 아리랑 아라리요 아리랑고개를 넘어간다. 나를 버리고 가시는 님은 십리도 못가서 발병난다. 아리랑 아리랑
          아라리요 아리랑 고개고개로 넘어간다.
        </S.TrivialInfoInfoBody>
      </S.TrivialInfoContainer>
    </S.Container>
  )
}
