import { ButtonV2 } from '@/components'
import { GameMainAlign, GameMainCommon } from '@/constants/index'
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'
import { FC, HTMLAttributes, PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import { PositionProps } from '../../Game.types'
import * as S from './AlignedBox.styles'

interface Props extends HTMLAttributes<HTMLDivElement>, PositionProps {}

export const AlignedArea: FC<PropsWithChildren<Props>> = ({ align, children, ...props }) => {
  const navigate = useNavigate()

  return (
    <S.AlignedArea align={align} {...props}>
      <S.ThumbnailImg src={GameMainAlign[align].imgSrc} />
      {children}
      <S.TitleAndButton align={align}>
        <h1>{GameMainAlign[align].titleText}</h1>
        <ButtonV2 icon={faSpaceShuttle} bgColor="transparent" onClick={() => navigate(`${GameMainAlign[align].to}`)}>
          {GameMainCommon.buttonText}
        </ButtonV2>
      </S.TitleAndButton>
    </S.AlignedArea>
  )
}
