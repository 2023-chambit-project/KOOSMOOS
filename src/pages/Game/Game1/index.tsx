import { flagListAtom } from '@/atoms/flagList.atom'
import { moonShapeAtom } from '@/atoms/moonShape.atom'
import { viewTypeAtom } from '@/atoms/viewType.atom'
import { useGetGame1Flags } from '@/services'
import type { MoonProp } from '@/types'
import { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { ViewTypeProp } from './Game1.types'
import { GeneralMoonView, MagnifiedMoonView, SidePanel } from './components'

const Game1Page = () => {
  const setFlagList = useSetRecoilState(flagListAtom)
  const setMoonShape = useSetRecoilState<MoonProp>(moonShapeAtom)
  const [viewType] = useRecoilState<ViewTypeProp>(viewTypeAtom)
  const { data } = useGetGame1Flags()

  useEffect(() => {
    setFlagList(data!.flagList)
    setMoonShape(data!.moonShape)
  }, [setFlagList, setMoonShape, data])

  return (
    <>
      {viewType == 'general' ? <GeneralMoonView /> : <MagnifiedMoonView />}
      <SidePanel />
    </>
  )
}

export default Game1Page
