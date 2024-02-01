import type { PictureItemProps } from './PictureItem.types'

import { useState } from 'react'
import SkeletonPictureItem from './PictureItem.skeleton'
import * as S from './PictureItem.styles'

export const PictureItem = ({ picture, onImageClick }: PictureItemProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  return (
    <>
      {!isImageLoaded && <SkeletonPictureItem />}
      <S.PictureItemContainer onClick={() => onImageClick(picture.links[0]?.href)}>
        <S.PictureImage
          src={picture.links[0]?.href}
          alt={picture.data[0]?.title}
          onLoad={() => {
            setIsImageLoaded(!!picture.data[0])
          }}
        />
        <S.PictureName>{picture.data[0]?.title}</S.PictureName>
      </S.PictureItemContainer>
    </>
  )
}
