import type { FC } from 'react'
import * as S from './Skeleton.styles'
import type { ShapeProps } from './Skeleton.type'

interface Props extends ShapeProps {}

export const Skeleton: FC<Props> = ({ ...props }) => {
  return <S.AnimationSkelton {...props} />
}

export default Skeleton
