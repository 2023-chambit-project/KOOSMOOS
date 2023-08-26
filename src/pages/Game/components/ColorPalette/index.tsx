import { Box } from '@/components/Box'
import { GameMainAlign, GameMainCommon } from '@/constants'
import { FC, HTMLAttributes } from 'react'
import { PositionProps } from '../../Game.types'
import * as S from './ColorPalette.styles'

interface Props extends HTMLAttributes<HTMLDivElement>, PositionProps {}

export const ColorPalette: FC<Props> = ({ align }) => {
  return (
    <S.ColorPalette align={align}>
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
    </S.ColorPalette>
  )
}
