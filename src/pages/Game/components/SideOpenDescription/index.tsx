import { Box } from '@/components'
import { ALIGN_VALUE, COMMON_TEXT } from '@/constants'
import type { FC, HTMLAttributes } from 'react'
import type { SymmetryProps } from '../../Game.types'
import * as S from './SideOpenDescription.styles'

interface Props extends HTMLAttributes<HTMLDivElement>, SymmetryProps {}

export const SideOpenDescription: FC<Props> = ({ align }) => {
  return (
    <S.SideOpenDescription align={align}>
      <S.MainHeading>{ALIGN_VALUE[align].mainHeadingText}</S.MainHeading>
      <S.Quotation>{ALIGN_VALUE[align].identity}</S.Quotation>
      <S.Divider />
      <S.SubHeading>{COMMON_TEXT.InfoText}</S.SubHeading>
      <Box bgColor={ALIGN_VALUE[align].secondaryColor} variant="full" height="auto" style={{ padding: '1rem 0.2rem' }}>
        {ALIGN_VALUE[align].bodyTexts.map((item) => (
          <S.IntroductionDetail key={item}>{item}</S.IntroductionDetail>
        ))}
      </Box>
    </S.SideOpenDescription>
  )
}
