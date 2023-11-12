import * as S from './pictureitem.styles'

import React from 'react'

type Picture = {
  imageUrl: string
  title: string
  links: { href: string }[]
  data: { title: string }[]
}

type PictureItemProps = {
  picture: Picture
  onImageClick: (imageUrl: string) => void
}

const PictureItem: React.FC<PictureItemProps> = ({ picture, onImageClick }) => {
  return (
    <S.PictureItemContainer onClick={() => onImageClick(picture.imageUrl)}>
      <S.PictureImage src={picture.imageUrl} alt={picture.title} />
      <S.PictureName>{picture.title}</S.PictureName>
    </S.PictureItemContainer>
  )
}

export default PictureItem
