import { Button } from '@/components'
import { GameMainAlign, GameMainCommon } from '@/constants/index'
import { FC, HTMLAttributes, PropsWithChildren } from 'react'
import { PositionProps } from '../../Game.types'
import * as S from './AlignedBox.styles'

interface Props extends HTMLAttributes<HTMLDivElement>, PositionProps {}

export const AlignedArea: FC<PropsWithChildren<Props>> = ({ align, children, ...props }) => {
  return (
    <S.AlignedArea align={align} {...props}>
      <S.ThumbnailImg src={GameMainAlign[align].imgSrc} />
      {children}
      <S.TitleAndButton align={align}>
        <h1>{GameMainAlign[align].titleText}</h1>
        <Button variant="ghost" size="fit" onClick={() => {}}>
          {GameMainCommon.buttonText}
        </Button>
      </S.TitleAndButton>
    </S.AlignedArea>
  )
}
