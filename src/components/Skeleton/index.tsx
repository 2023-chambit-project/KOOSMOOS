import type { FC } from 'react'
import * as S from './Skeleton.styles'
import type { ShapeProps } from './Skeleton.type'

export const Skeleton: FC<ShapeProps> = ({ ...props }) => {
  return <S.AnimationSkelton {...props} />
}

export default Skeleton
