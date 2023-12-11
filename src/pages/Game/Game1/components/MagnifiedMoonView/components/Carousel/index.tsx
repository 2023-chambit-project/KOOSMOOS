import { curFlagIndexAtom } from '@/atoms/curFlagIndex.atom'
import { useGetGame1Flags } from '@/services'
import type { FlagProp } from '@/types'
import { useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { Flag } from '../Flag'
import * as S from './Carousel.styles'

const Carousel = () => {
  const { data } = useGetGame1Flags()
  const curFlagIndex = useRecoilValue<number>(curFlagIndexAtom)
  const carouselRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(-${curFlagIndex}00%)`
    }
  }, [curFlagIndex])

  return (
    <>
      <S.GreetingList ref={carouselRef}>
        {data!.flagList.map((val: FlagProp) => {
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
