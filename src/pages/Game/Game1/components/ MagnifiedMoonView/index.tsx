import { Button } from '@/components'
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
        <Button style={{ left: 0 }} icon={faChevronCircleLeft} size="fit" onClick={() => switchToButton(-1)}></Button>
        <Button style={{ right: 0 }} icon={faChevronCircleRight} size="fit" onClick={() => switchToButton(1)}></Button>
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
