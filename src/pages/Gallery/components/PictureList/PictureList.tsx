import { PictureItem } from '..'
import * as S from './PictureList.styles'
import type { PictureListProps } from './PictureList.types'

export const PictureList = ({ pictures, onImageClick, selectedCategory }: PictureListProps) => {
  return (
    <S.PictureListContainer>
      {pictures.map((picture, index) => {
        return (
          <S.PictureImageWrapper key={selectedCategory + index}>
            <PictureItem picture={picture} onImageClick={onImageClick}></PictureItem>
          </S.PictureImageWrapper>
        )
      })}
    </S.PictureListContainer>
  )
}
