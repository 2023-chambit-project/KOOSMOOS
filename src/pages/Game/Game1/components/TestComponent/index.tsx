import { Button } from '@/components'
import { FlexCenterCSS } from '@/styles'
import { FlagGame1Response, FlagProp } from '@/types'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FC, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Flag from '../ MagnifiedMoonView/components/Flag'

const Container = styled.div`
  ${FlexCenterCSS}
  width: 500px;
  height: 500px;
`
const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* padding: 0 10%; */
  overflow: hidden;
  &:hover {
    button {
      position: absolute;
      top: 45%;
      z-index: 1;
      display: block;
      padding: 8px 5px;
    }
  }

  button {
    display: none;
  }
  background-color: red;
`
const Carousel = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: orange;
`
const CarouselItem = styled.li`
  flex: none;
  ${FlexCenterCSS}
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background-color: yellow;
`
const TestComponent: FC<FlagGame1Response> = ({ flagList }) => {
  const [currIndex, setCurrIndex] = useState(0)
  const carouselRef = useRef<HTMLUListElement>(null)
  useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(-${currIndex}00%)`
    }
  }, [currIndex])
  const handleSwipe = (direction: number) => {
    const newIndex = currIndex + direction
    if (newIndex !== flagList.length && newIndex !== -1) {
      setCurrIndex((prev) => prev + direction)
      if (carouselRef.current !== null) {
        carouselRef.current.style.transition = 'all 0.5s ease-in-out'
      }
    }
  }
  return (
    <Container>
      <CarouselWrapper>
        <Button
          icon={faChevronCircleLeft}
          style={{ left: 0 }}
          size="fit"
          onClick={() => {
            handleSwipe(-1)
          }}
        />
        <Button
          icon={faChevronCircleRight}
          style={{ right: 0 }}
          size="fit"
          onClick={() => {
            handleSwipe(1)
          }}
        />
        <Carousel ref={carouselRef}>
          {flagList.map((val: FlagProp) => {
            return (
              <CarouselItem>
                <Flag {...val} />
              </CarouselItem>
            )
          })}
        </Carousel>
      </CarouselWrapper>
    </Container>
  )
}

export default TestComponent
