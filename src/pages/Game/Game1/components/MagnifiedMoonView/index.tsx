import { curFlagIndexAtom } from '@/atoms/curFlagIndex.atom'
import { viewTypeAtom } from '@/atoms/viewType.atom'
import { ButtonV2 } from '@/components/ButtonV2'
import { theme } from '@/styles'
import type { FlagProp } from '@/types'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faStopCircle } from '@fortawesome/free-solid-svg-icons/faStopCircle'
import { FC, useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import type { FlagListProp, ViewTypeProp } from '../../Game1.types'
import * as S from './ MagnifiedMoonView.styles'
import Flag from './components/Flag'

export const MagnifiedMoonView: FC<FlagListProp> = ({ flagList }) => {
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
            <S.GreetingList ref={carouselRef}>
              {flagList.map((val: FlagProp) => {
                return (
                  <S.GreetingItem key={val.id}>
                    <Flag {...val} />
                  </S.GreetingItem>
                )
              })}
            </S.GreetingList>
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
  )
}
