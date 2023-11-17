import { flagListAtom } from '@/atoms/flagList.atom'
import { moonShapeAtom } from '@/atoms/moonShape.atom'
import { viewTypeAtom } from '@/atoms/viewType.atom'
import { useGetGame1Flags } from '@/services'
import type { FlagProp, MoonProp } from '@/types'
import { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { flagWhenFetchFailure, flagWhenNewmoon } from './Game1.constants'
import type { ViewTypeProp } from './Game1.types'
import { GeneralMoonView, MagnifiedMoonView, SidePanel } from './components'

const Game1Page = () => {
  const { data } = useGetGame1Flags()

  const setFlagList = useSetRecoilState<FlagProp[]>(flagListAtom)
  const setMoonShape = useSetRecoilState<MoonProp>(moonShapeAtom)
  const [viewType] = useRecoilState<ViewTypeProp>(viewTypeAtom)

  useEffect(() => {
    if (data?.moonShape == 'newMoon') {
      setMoonShape(data?.moonShape)
      setFlagList([flagWhenNewmoon])
      return
    }

    if (data?.moonShape == 'fullMoon' && !data?.flagList.length) {
      setMoonShape('newMoon')
      setFlagList([flagWhenFetchFailure])
      return
    }

    setFlagList(data?.flagList as FlagProp[])
    setMoonShape(data?.moonShape as MoonProp)
  }, [setFlagList, setMoonShape, data?.flagList, data?.moonShape])

  return (
    <>
      {viewType == 'general' ? <GeneralMoonView /> : <MagnifiedMoonView />}
      <SidePanel />
    </>
  )
}

export default Game1Page
