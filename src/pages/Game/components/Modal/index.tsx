import { Box } from '@/components/Box'
import { FC, HTMLAttributes } from 'react'
import { PositionProps } from '../../Game.types'
import * as C from '../../constants/index'
import * as S from './Modal.styles'

interface Props extends HTMLAttributes<HTMLDivElement>, PositionProps {}

export const Modal: FC<Props> = ({ align }) => {
  return (
    <S.Modal align={align}>
      <S.MainHeading>{align === 'left' ? C.MainHeading.left : C.MainHeading.right}</S.MainHeading>
      <S.Quotation>{align === 'left' ? C.Identity.left : C.Identity.right}</S.Quotation>
      <S.Divider />
      <S.SubHeading>{C.SubHeading}</S.SubHeading>
      <Box
        bgColor={align === 'left' ? '#CCA148' : '#1562AF'}
        variant="full"
        height="auto"
        style={{ padding: '1rem 0.2rem' }}
      >
        {align === 'left'
          ? C.Details.left.map((detail) => <S.IntroductionDetail key={detail}>{detail}</S.IntroductionDetail>)
          : C.Details.right.map((detail) => <S.IntroductionDetail key={detail}>{detail}</S.IntroductionDetail>)}
      </Box>
    </S.Modal>
  )
}
