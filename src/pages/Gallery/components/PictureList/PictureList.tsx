import { PictureItem } from '../PictureItem'
import * as S from './PictureList.styles'
import type { PictureListProps } from './PictureList.types'

export const PictureList = ({ pictures, onImageClick }: PictureListProps) => {
  return (
    <S.PictureListContainer>
      {pictures.map((picture) => (
        <PictureItem key={picture.links[0].href} picture={picture} onImageClick={onImageClick} />
      ))}
    </S.PictureListContainer>
  )
}
