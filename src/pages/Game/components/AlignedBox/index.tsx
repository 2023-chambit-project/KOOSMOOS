import { Button } from '@/components'
import { ALIGN_VALUE, COMMON_TEXT } from '@/constants'
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'
import type { FC, HTMLAttributes, PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import type { HorizontalSymmetryProps } from '../../Game.types'
import * as S from './AlignedBox.styles'

interface Props extends HTMLAttributes<HTMLDivElement>, HorizontalSymmetryProps {}

export const AlignedArea: FC<PropsWithChildren<Props>> = ({ horizontalAlign, children, ...props }) => {
  const navigate = useNavigate()

  return (
    <S.AlignedArea horizontalAlign={horizontalAlign} {...props}>
      <S.ThumbnailImg src={ALIGN_VALUE[horizontalAlign].imgSrc} />
      {children}
      <S.TitleAndButton horizontalAlign={horizontalAlign}>
        <h1>{ALIGN_VALUE[horizontalAlign].titleText}</h1>
        <Button
          icon={faSpaceShuttle}
          $bgColor="transparent"
          onClick={() => navigate(`/${ALIGN_VALUE[horizontalAlign].to}`)}
        >
          {COMMON_TEXT.buttonText}
        </Button>
      </S.TitleAndButton>
    </S.AlignedArea>
  )
}
