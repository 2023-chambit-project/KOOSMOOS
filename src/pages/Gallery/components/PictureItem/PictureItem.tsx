import { PictureItemProps } from './PictureItem.types'

import { useState } from 'react'
import * as S from './PictureItem.styles'

export const PictureItem = ({ picture, onImageClick }: PictureItemProps) => {
  const [isImgLoading, setImgLoading] = useState(true)

  return (
    <S.PictureItemContainer onClick={() => onImageClick(picture.links[0].href)}>
      <S.PictureImgWrapper>
        {isImgLoading && <S.PictureImgSkeleton>이미지 로딩중..</S.PictureImgSkeleton>}
        <S.PictureImage
          src={picture.links[0].href}
          alt={picture.data[0].title}
          onLoad={() => {
            setImgLoading(false)
          }}
        />
      </S.PictureImgWrapper>

      <S.PictureName>{picture.data[0].title}</S.PictureName>
    </S.PictureItemContainer>
  )
}
