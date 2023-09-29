import { Button } from '@/components'
import type { FlagGame1Response } from '@/types'
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
    if (newIndex !== -1 && newIndex !== flagList.length) {
      setCurrIndex(newIndex)
    }
  }
  return (
    <S.LunaSurface>
      <S.YellowBase>
        <Button
          icon={faChevronCircleLeft}
          className="leftButton"
          size="fit"
          onClick={() => switchToButton(-1)}
        ></Button>
        <Button
          icon={faChevronCircleRight}
          className="rightButton"
          size="fit"
          onClick={() => switchToButton(1)}
        ></Button>
        <S.GreetingList ref={carouselRef}>
          <S.GreetingItem>
            <Flag {...flagList[0]}></Flag>
          </S.GreetingItem>
        </S.GreetingList>
      </S.YellowBase>
    </S.LunaSurface>
  )
}

export default MagnifiedMoonView
