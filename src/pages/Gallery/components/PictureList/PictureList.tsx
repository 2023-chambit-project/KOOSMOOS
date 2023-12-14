import { PictureItem } from '../PictureItem'
import * as S from './PictureList.styles'
import { PictureListProps } from './PictureList.types'

export const PictureList = ({ pictures, onImageClick }: PictureListProps) => {
  return (
    <S.PictureListContainer>
      {pictures.map((picture, index) => (
        <PictureItem key={index} picture={picture} onImageClick={onImageClick} />
      ))}
    </S.PictureListContainer>
  )
}
