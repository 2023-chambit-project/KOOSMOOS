import { Skeleton } from '@/components'
import * as S from './PictureItem.styles'

export const SkeletonPictureItem = () => {
  return (
    <S.SkeletonPictureItemContainer>
      <Skeleton width="100%" height="30rem" borderRadius="8px" />
      <Skeleton width="100%" height="6rem" borderRadius="8px" />
    </S.SkeletonPictureItemContainer>
  )
}
