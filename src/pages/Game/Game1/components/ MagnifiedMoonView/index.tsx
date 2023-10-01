import { ButtonV2 } from '@/components/ButtonV2'
import type { FlagGame1Response, FlagProp } from '@/types'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FC, useEffect, useRef, useState } from 'react'
import * as S from './ MagnifiedMoonView.styles'
import Flag from './components/Flag'

const MagnifiedMoonView: FC<FlagGame1Response> = ({ flagList }) => {
  const [currIndex, setCurrIndex] = useState(0)
  const carouselRef = useRef<HTMLUListElement>(null)
  useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(-${currIndex}00%)`
    }
  }, [currIndex])
  const switchToButton = (direction: number) => {
    const newIndex = currIndex + direction
    if (newIndex !== flagList.length && newIndex !== -1) {
      setCurrIndex((prev) => prev + direction)
    }
  }
  return (
    <S.LunaSurface>
      <S.YellowBase>
        <ButtonV2 style={{ left: '2rem' }} icon={faChevronCircleLeft} size="fit" onClick={() => switchToButton(-1)} />
        <ButtonV2 style={{ right: '2rem' }} icon={faChevronCircleRight} size="fit" onClick={() => switchToButton(1)} />
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
  )
}

export default MagnifiedMoonView
