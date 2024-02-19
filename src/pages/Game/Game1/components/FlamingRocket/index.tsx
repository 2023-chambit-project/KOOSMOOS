import type { FC } from 'react'
import { useEffect, useState } from 'react'
import * as S from './FlamingRocket.styles'
import type { Props } from './FlamingRocket.types'
import FlameAlter1 from '/assets/game/game1/rocket/FlameAlter1.webp'
import FlameAlter2 from '/assets/game/game1/rocket/FlameAlter2.webp'
import Rocket from '/assets/game/game1/rocket/Rocket.webp'

export const FlamingRocket: FC<Props> = (props) => {
  const flameImages = [FlameAlter1, FlameAlter2]
  const [curFlameImageIndex, setCurFlameImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurFlameImageIndex((prev) => (prev + 1) % flameImages.length)
    }, 500)

    return () => clearInterval(intervalId)
  }, [setCurFlameImageIndex, flameImages.length])

  return (
    <S.RocketWrapper $isFlameStarted={props.isFlameStarted}>
      <S.RocketBody src={Rocket} />
      {props.isFlameStarted && <S.Flame src={flameImages[curFlameImageIndex]} />}
    </S.RocketWrapper>
  )
}
