import TeleScope from '@/assets/lottie/telescope.json'
import { curFlagIndexAtom } from '@/atoms/curFlagIndex.atom'
import { viewTypeAtom } from '@/atoms/viewType.atom'
import { Button } from '@/components'
import { useLoading } from '@/hooks'
import { useGetGame1Flags } from '@/services'
import { theme } from '@/styles'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faStopCircle } from '@fortawesome/free-solid-svg-icons/faStopCircle'
import { useRecoilState, useSetRecoilState } from 'recoil'
import type { ViewTypeProp } from '../../Game1.types'
import { LoadingPage } from '../Loading'
import * as S from './ MagnifiedMoonView.styles'
import Carousel from './components/Carousel'

export const MagnifiedMoonView = () => {
  const { loading } = useLoading(3500)
  const { data } = useGetGame1Flags()

  const setViewType = useSetRecoilState<ViewTypeProp>(viewTypeAtom)
  const [curFlagIndex, setCurFlagIndex] = useRecoilState<number>(curFlagIndexAtom)

  const switchToButton = (direction: number) => {
    const newIndex = curFlagIndex + direction
    if (newIndex !== data!.flagList.length && newIndex !== -1) {
      setCurFlagIndex((prev) => prev + direction)
    }
  }

  return (
    <>
      {loading && <LoadingPage lottieAnimation={TeleScope} text="망원경 준비 중.." />}
      {!loading && (
        <S.Barrel>
          <S.Joint>
            <S.LunaSurface>
              <S.YellowBase>
                <Button
                  style={{ left: '10%' }}
                  icon={faChevronCircleLeft}
                  size="fit"
                  onClick={() => switchToButton(-1)}
                />
                <Button
                  style={{ right: '10%' }}
                  icon={faChevronCircleRight}
                  size="fit"
                  onClick={() => switchToButton(1)}
                />
                <Carousel />
              </S.YellowBase>
            </S.LunaSurface>
          </S.Joint>
          <Button
            bgColor={theme.COLOR.alert[100]}
            icon={faStopCircle}
            style={{ position: 'absolute', left: '3%', top: '15%' }}
            onClick={() => {
              setViewType('general')
            }}
            round="slightly"
          >
            망원경 끄기
          </Button>
        </S.Barrel>
      )}
    </>
  )
}
