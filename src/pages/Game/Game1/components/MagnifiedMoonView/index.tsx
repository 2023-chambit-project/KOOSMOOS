import TeleScope from '@/assets/lottie/telescope.json'
import { curFlagIndexAtom } from '@/atoms/curFlagIndex.atom'
import { flagListAtom } from '@/atoms/flagList.atom'
import { viewTypeAtom } from '@/atoms/viewType.atom'
import { ButtonV2 } from '@/components/ButtonV2'
import { useLoading } from '@/hooks'
import { theme } from '@/styles'
import { FlagProp } from '@/types'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faStopCircle } from '@fortawesome/free-solid-svg-icons/faStopCircle'
import { FC } from 'react'
import { useRecoilState } from 'recoil'
import type { ViewTypeProp } from '../../Game1.types'
import { LoadingPage } from '../Loading'
import * as S from './ MagnifiedMoonView.styles'
import Carousel from './components/Carousel'

export const MagnifiedMoonView: FC = () => {
  const { loading } = useLoading(3500)
  const [, setViewType] = useRecoilState<ViewTypeProp>(viewTypeAtom)

  const [flagList] = useRecoilState<FlagProp[]>(flagListAtom)
  const [curFlagIndex, setCurFlagIndex] = useRecoilState<number>(curFlagIndexAtom)

  const switchToButton = (direction: number) => {
    const newIndex = curFlagIndex + direction
    if (newIndex !== flagList.length && newIndex !== -1) {
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
                <ButtonV2
                  style={{ left: '10%' }}
                  icon={faChevronCircleLeft}
                  size="fit"
                  onClick={() => switchToButton(-1)}
                />
                <ButtonV2
                  style={{ right: '10%' }}
                  icon={faChevronCircleRight}
                  size="fit"
                  onClick={() => switchToButton(1)}
                />
                <Carousel />
              </S.YellowBase>
            </S.LunaSurface>
          </S.Joint>
          <ButtonV2
            bgColor={theme.COLOR.alert[100]}
            icon={faStopCircle}
            style={{ position: 'absolute', left: '3%', top: '15%' }}
            onClick={() => {
              setViewType('general')
            }}
            round="slightly"
          >
            망원경 끄기
          </ButtonV2>
        </S.Barrel>
      )}
    </>
  )
}
