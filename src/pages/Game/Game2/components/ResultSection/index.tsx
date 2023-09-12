import { useLoading } from '@/hooks/useLoading'
import type { FC } from 'react'
import type { SectionProps } from '../../Game2.types'
import { LoadingSection } from '../Loading'
import * as S from './Result.styles'

export const ResultSection: FC<SectionProps> = ({ onNextState }) => {
  const { loading } = useLoading(3500)

  return <S.Container>{loading && <LoadingSection />}</S.Container>
}
