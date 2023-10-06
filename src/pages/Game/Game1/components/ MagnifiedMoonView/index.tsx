import { curFlagIndexAtom } from '@/atoms/curFlagIndex.atom'
import { ButtonV2 } from '@/components/ButtonV2'
import type { FlagProp } from '@/types'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FC, useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import type { FlagListProp } from '../../Game1.types'
import * as S from './ MagnifiedMoonView.styles'
import Flag from './components/Flag'

const MagnifiedMoonView: FC<FlagListProp> = ({ flagList }) => {
  const [curFlagIndex, setCurFlagIndex] = useRecoilState<number>(curFlagIndexAtom)
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
      <S.LunaSurface>
        <S.YellowBase>
          <ButtonV2 style={{ left: '2rem' }} icon={faChevronCircleLeft} size="fit" onClick={() => switchToButton(-1)} />
          <ButtonV2
            style={{ right: '2rem' }}
            icon={faChevronCircleRight}
            size="fit"
            onClick={() => switchToButton(1)}
          />
          <S.GreetingList ref={carouselRef}>
            {flagList.map((val: FlagProp) => {
              return (
                <S.GreetingItem>
                  <Flag {...val} />
                </S.GreetingItem>
              )
            })}
          </S.GreetingList>
        </S.YellowBase>
      </S.LunaSurface>
    </>
  )
}

export default MagnifiedMoonView
