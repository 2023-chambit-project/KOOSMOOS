import { flagListAtom } from '@/atoms/flagList.atom'
import { moonShapeAtom } from '@/atoms/moonShape.atom'
import { viewTypeAtom } from '@/atoms/viewType.atom'
import { useGetGame1Flags } from '@/services'
import type { FlagProp, MoonProp } from '@/types'
import { useRecoilState, useSetRecoilState } from 'recoil'
import type { ViewTypeProp } from './Game1.types'
import { GeneralMoonView, MagnifiedMoonView, SidePanel } from './components'

const Game1Page = () => {
  const { data } = useGetGame1Flags()

  const setFlagList = useSetRecoilState<FlagProp[]>(flagListAtom)
  const setMoonShape = useSetRecoilState<MoonProp>(moonShapeAtom)
  const [viewType] = useRecoilState<ViewTypeProp>(viewTypeAtom)

  setFlagList(data?.flagList as FlagProp[])
  setMoonShape(data?.moonShape as MoonProp)

  return (
    <>
      {viewType == 'general' ? <GeneralMoonView /> : <MagnifiedMoonView />}
      <SidePanel />
    </>
  )
}

export default Game1Page
