import * as S from './pictureitem.styles'

import { PictureItemProps } from './pictureitem.types'

const PictureItem = ({ picture, onImageClick }: PictureItemProps) => {
  return (
    <S.PictureItemContainer onClick={() => onImageClick(picture.imageUrl)}>
      <S.PictureImage src={picture.imageUrl} alt={picture.title} />
      <S.PictureName>{picture.title}</S.PictureName>
    </S.PictureItemContainer>
  )
}

export default PictureItem
