import { useEffect, useState } from 'react'
import * as S from './FlamingRocket.styles'
import FlameAlter1 from '/assets/game/game1/rocket/FlameAlter1.webp'
import FlameAlter2 from '/assets/game/game1/rocket/FlameAlter2.webp'
import Rocket from '/assets/game/game1/rocket/Rocket.webp'

interface Props {
  isFlameStarted: boolean
}

const FlamingRocket = ({ isFlameStarted }: Props) => {
  const flameImages = [FlameAlter1, FlameAlter2]
  const [curFlameImageIndex, setCurFlameImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurFlameImageIndex((prev) => (prev + 1) % flameImages.length)
    }, 500)

    return () => clearInterval(intervalId)
  }, [setCurFlameImageIndex, flameImages.length])

  return (
    <>
      <S.RocketWrapper $isFlameStarted={isFlameStarted}>
        <S.RocketBody src={Rocket} />
        {isFlameStarted && <S.Flame src={flameImages[curFlameImageIndex]} />}
      </S.RocketWrapper>
    </>
  )
}

export default FlamingRocket
