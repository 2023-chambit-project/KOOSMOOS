import TeleScope from '@/assets/lottie/telescope.json'
import { curFlagIndexAtom } from '@/atoms/curFlagIndex.atom'
import { viewTypeAtom } from '@/atoms/viewType.atom'
import { ButtonV2 } from '@/components/ButtonV2'
import { useLoading } from '@/hooks'
import { theme } from '@/styles'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faStopCircle } from '@fortawesome/free-solid-svg-icons/faStopCircle'
import { FC, useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import type { FlagListProp, ViewTypeProp } from '../../Game1.types'
import { LoadingPage } from '../Loading'
import * as S from './ MagnifiedMoonView.styles'
import Carousel from './components/Carousel'

export const MagnifiedMoonView: FC<FlagListProp> = ({ flagList }) => {
  const { loading } = useLoading(3500)

  const [curFlagIndex, setCurFlagIndex] = useRecoilState<number>(curFlagIndexAtom)
  const [, setViewType] = useRecoilState<ViewTypeProp>(viewTypeAtom)
  const carouselRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(-${curFlagIndex}00%)`
    }
  }, [curFlagIndex])

  const switchToButton = (direction: number) => {
    const newIndex = curFlagIndex! + direction
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
                <Carousel {...{ flagList }} />
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
