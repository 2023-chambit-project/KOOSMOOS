import { PictureItemProps } from './PictureItem.types'

import * as S from './PictureItem.styles'

export const PictureItem = ({ picture, onImageClick }: PictureItemProps) => {
  return (
    <S.PictureItemContainer onClick={() => onImageClick(picture.imageUrl)}>
      <S.PictureImage src={picture.imageUrl} alt={picture.title} />
      <S.PictureName>{picture.title}</S.PictureName>
    </S.PictureItemContainer>
  )
}
