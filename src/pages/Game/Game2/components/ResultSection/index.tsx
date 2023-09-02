import type { FC } from 'react'
import { useEffect, useState } from 'react'
import type { SectionProps } from '../../Game2.types'
import { LoadingSection } from '../Loading'
import * as S from './Result.styles'

export const ResultSection: FC<SectionProps> = ({ onTestStateChange }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false)
    }, 3500)

    return () => clearTimeout(loadingTimer)
  }, [])

  return <S.Container>{loading && <LoadingSection />}</S.Container>
}
