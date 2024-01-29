import type { FC, HTMLAttributes, PropsWithChildren } from 'react'
import * as S from './Skeleton.styles'
import type { StyleProps } from './Skeleton.type'

interface Props extends HTMLAttributes<HTMLDivElement>, StyleProps {}

export const Skeleton: FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
  return (
    <S.SkeltonWrapper {...props}>
      <S.AnimationSkelton />
      <S.OverlayContent>{children}</S.OverlayContent>
    </S.SkeltonWrapper>
  )
}

export default Skeleton
