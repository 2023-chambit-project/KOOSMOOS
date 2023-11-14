import { curFlagIndexAtom } from '@/atoms/curFlagIndex.atom'
import { flagListAtom } from '@/atoms/flagList.atom'
import type { FlagProp } from '@/types'
import { FC, useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import Flag from '../Flag'
import * as S from './Carousel.styles'

const Carousel: FC = () => {
  const [flagList] = useRecoilState<FlagProp[]>(flagListAtom)
  const [curFlagIndex] = useRecoilState<number>(curFlagIndexAtom)
  const carouselRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(-${curFlagIndex}00%)`
    }
  }, [curFlagIndex])

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
