import * as S from './PictureItem.styles'

const SkeletonPictureItem = () => {
  return (
    <S.SkeletonPictureItemContainer>
      <S.SkeletonPictureImage />
      <S.SkeletonPictureName />
    </S.SkeletonPictureItemContainer>
  )
}

export default SkeletonPictureItem
