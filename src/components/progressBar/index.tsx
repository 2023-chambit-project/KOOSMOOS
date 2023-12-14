import { useEffect, useState, type FC } from 'react'
import * as S from './progressBar.styles'
import type { BorderRadiusSize, HeightSize } from './progressBar.types'

interface Props {
  newPercentage: number
  bgColor: string
  heightSize?: HeightSize
  borderRadius?: BorderRadiusSize
}

export const ProgressBar: FC<Props> = ({ newPercentage, bgColor, heightSize, borderRadius }) => {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(newPercentage) // percentage 값을 1씩 증가
    }, 50) // 50ms마다 실행

    return () => clearInterval(interval) // 컴포넌트 unmount 시에 interval 해제
  }, [newPercentage])

  return (
    <S.ProgressBarContainer heightSize={heightSize} borderRadius={borderRadius}>
      <S.FilledProgress percentage={percentage} bgColor={bgColor} borderRadius={borderRadius} />
    </S.ProgressBarContainer>
  )
}
