import { useEffect, useState } from 'react'
import * as S from './ShootingStart.styles'

const ShootingStarAnimation = () => {
  const [viewportSize, setViewportSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <S.Background>
      <S.Night>
        {[...Array(10)].map((_, i) => (
          <S.Shooting_star
            key={i}
            delay={Math.floor(Math.random() * viewportSize.width)}
            top={Math.floor(Math.random() * viewportSize.height)}
            left={Math.floor(Math.random() * viewportSize.width)}
          />
        ))}
      </S.Night>
    </S.Background>
  )
}

export default ShootingStarAnimation
