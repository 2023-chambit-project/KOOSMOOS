import { Box } from '@/components/Box'
import { GameMainAlign, GameMainCommon } from '@/constants'
import { FC, HTMLAttributes } from 'react'
import type { PositionProps } from '../../Game.types'
import * as S from './SideOpenDescription.styles'

interface Props extends HTMLAttributes<HTMLDivElement>, PositionProps {}

export const SideOpenDescription: FC<Props> = ({ align }) => {
  return (
    <S.SideOpenDescription align={align}>
      <S.MainHeading>{GameMainAlign[align].mainHeadingText}</S.MainHeading>
      <S.Quotation>{GameMainAlign[align].identity}</S.Quotation>
      <S.Divider />
      <S.SubHeading>{GameMainCommon.InfoText}</S.SubHeading>
      <Box
        bgColor={GameMainAlign[align].secondaryColor}
        variant="full"
        height="auto"
        style={{ padding: '1rem 0.2rem' }}
      >
        {GameMainAlign[align].bodyTexts.map((item) => (
          <S.IntroductionDetail key={item}>{item}</S.IntroductionDetail>
        ))}
      </Box>
    </S.SideOpenDescription>
  )
}
