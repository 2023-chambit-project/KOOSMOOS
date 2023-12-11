import { curFlagIndexAtom } from '@/atoms/curFlagIndex.atom'
import { sidePanelModeAtom } from '@/atoms/sidePanelMode.atom'
import { viewTypeAtom } from '@/atoms/viewType.atom'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import type { ViewTypeProp } from './Game1.types'
import { GeneralMoonView, MagnifiedMoonView, SidePanel } from './components'

const Game1Page = () => {
  const viewType = useRecoilValue<ViewTypeProp>(viewTypeAtom)
  useResetRecoilState(sidePanelModeAtom)
  useResetRecoilState(curFlagIndexAtom)

  return (
    <>
      {viewType == 'general' ? <GeneralMoonView /> : <MagnifiedMoonView />}
      <SidePanel />
    </>
  )
}

export default Game1Page
