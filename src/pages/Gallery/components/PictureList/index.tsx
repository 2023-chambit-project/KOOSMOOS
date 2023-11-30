import * as S from './picturelist.styles'

import PictureItem from '../PictureItem'
import { PictureListProps } from './picturelist.types'

const PictureList = ({ pictures, onImageClick }: PictureListProps) => {
  return (
    <S.PictureListContainer>
      {pictures.map((picture, index) => (
        <PictureItem key={index} picture={picture} onImageClick={onImageClick} />
      ))}
    </S.PictureListContainer>
  )
}

export default PictureList
