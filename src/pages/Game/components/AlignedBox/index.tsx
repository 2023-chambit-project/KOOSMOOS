import { Button } from '@/components'
import { ALIGN_VALUE, COMMON_TEXT } from '@/constants'
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'
import type { FC, HTMLAttributes, PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import type { SymmetryProps } from '../../Game.types'
import * as S from './AlignedBox.styles'

interface Props extends HTMLAttributes<HTMLDivElement>, SymmetryProps {}

export const AlignedArea: FC<PropsWithChildren<Props>> = ({ align, children, ...props }) => {
  const navigate = useNavigate()

  return (
    <S.AlignedArea align={align} {...props}>
      <S.ThumbnailImg src={ALIGN_VALUE[align].imgSrc} />
      {children}
      <S.TitleAndButton align={align}>
        <h1>{ALIGN_VALUE[align].titleText}</h1>
        <Button icon={faSpaceShuttle} $bgColor="transparent" onClick={() => navigate(`/${ALIGN_VALUE[align].to}`)}>
          {COMMON_TEXT.buttonText}
        </Button>
      </S.TitleAndButton>
    </S.AlignedArea>
  )
}
