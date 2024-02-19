import { Box } from '@/components'
import { ALIGN_VALUE, COMMON_TEXT } from '@/constants'
import type { FC, HTMLAttributes } from 'react'
import type { HorizontalSymmetryProps } from '../../Game.types'
import * as S from './SideOpenDescription.styles'

interface Props extends HTMLAttributes<HTMLDivElement>, HorizontalSymmetryProps {}

export const SideOpenDescription: FC<Props> = ({ horizontalAlign }) => {
  return (
    <S.SideOpenDescription horizontalAlign={horizontalAlign}>
      <S.MainHeading>{ALIGN_VALUE[horizontalAlign].mainHeadingText}</S.MainHeading>
      <S.Quotation>{ALIGN_VALUE[horizontalAlign].identity}</S.Quotation>
      <S.Divider />
      <S.SubHeading>{COMMON_TEXT.InfoText}</S.SubHeading>
      <Box
        bgColor={ALIGN_VALUE[horizontalAlign].secondaryColor}
        variant="full"
        height="auto"
        style={{ padding: '1rem 0.2rem' }}
      >
        {ALIGN_VALUE[horizontalAlign].bodyTexts.map((item) => (
          <S.IntroductionDetail key={item}>{item}</S.IntroductionDetail>
        ))}
      </Box>
    </S.SideOpenDescription>
  )
}
