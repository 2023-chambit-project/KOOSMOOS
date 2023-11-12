import { FlagListProp } from '@/pages/Game/Game1/Game1.types'
import { FlagProp } from '@/types'
import { FC, useRef } from 'react'
import Flag from '../Flag'
import * as S from './Carousel.styles'

const Carousel: FC<FlagListProp> = ({ flagList }) => {
  const carouselRef = useRef<HTMLUListElement>(null)
  return (
    <>
      <S.GreetingList ref={carouselRef}>
        {flagList.map((val: FlagProp) => {
          return (
            <S.GreetingItem key={val.id}>
              <Flag {...val} />
            </S.GreetingItem>
          )
        })}
      </S.GreetingList>
    </>
  )
}

export default Carousel
