import { PictureItem } from '../PictureItem'
import * as S from './PictureList.styles'
import type { PictureListProps } from './PictureList.types'

export const PictureList = ({ pictures, onImageClick }: PictureListProps) => {
  return (
    <S.PictureListContainer>
      {pictures.map((picture) => (
        <S.PictureImageWrapper key={picture.links[0].href}>
          <PictureItem picture={picture} onImageClick={onImageClick} />
        </S.PictureImageWrapper>
      ))}
    </S.PictureListContainer>
  )
}
