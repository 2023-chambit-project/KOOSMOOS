import { PictureItemProps } from './PictureItem.types'

import { useState } from 'react'
import SkeletonPictureItem from './PictureItem.skeleton'
import * as S from './PictureItem.styles'

export const PictureItem = ({ picture, onImageClick }: PictureItemProps) => {
  const [isImgLoading, setImgLoading] = useState(true)

  return (
    <>
      {isImgLoading && <SkeletonPictureItem />}

      <S.PictureItemContainer onClick={() => onImageClick(picture.links[0].href)}>
        <S.PictureImage
          src={picture.links[0].href}
          alt={picture.data[0].title}
          onLoad={() => {
            setImgLoading(false)
          }}
        />
        <S.PictureName>{picture.data[0].title}</S.PictureName>
      </S.PictureItemContainer>
    </>
  )
}
