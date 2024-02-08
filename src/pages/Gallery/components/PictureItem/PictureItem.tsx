import type { PictureItemProps } from './PictureItem.types'

import * as S from './PictureItem.styles'

export const PictureItem = ({ picture, onImageClick, onImageIsLoadedChange }: PictureItemProps) => {
  return (
    <S.PictureItemContainer onClick={() => onImageClick(picture?.links[0]?.href)}>
      <S.PictureImage src={picture?.links[0]?.href} alt={picture?.data[0]?.title} onLoad={onImageIsLoadedChange} />
      <S.PictureName>{picture?.data[0]?.title}</S.PictureName>
    </S.PictureItemContainer>
  )
}
