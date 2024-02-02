import type { PictureItemProps } from './PictureItem.types'

import * as S from './PictureItem.styles'

export const PictureItem = ({ picture, index, onImageClick, setIsEachImgLoaded }: PictureItemProps) => {
  return (
    <S.PictureItemContainer onClick={() => onImageClick(picture?.links[0]?.href)}>
      <S.PictureImage
        src={picture?.links[0]?.href}
        alt={picture?.data[0]?.title}
        onLoad={() => {
          setIsEachImgLoaded((prev) => {
            const prevCopyArr = [...prev]
            prevCopyArr[index] = true
            return prevCopyArr
          })
        }}
      />
      <S.PictureName>{picture?.data[0]?.title}</S.PictureName>
    </S.PictureItemContainer>
  )
}
