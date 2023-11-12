import * as S from './picturelist.styles'

import React from 'react'
import PictureItem from '../PictureItem'

type Picture = {
  imageUrl: string
  title: string
  links: { href: string }[]
  data: { title: string }[]
}

type PictureListProps = {
  pictures: Picture[]
  onImageClick: (imageUrl: string) => void
}

const PictureList: React.FC<PictureListProps> = ({ pictures, onImageClick }) => {
  return (
    <S.PictureListContainer>
      {pictures.map((picture, index) => (
        <PictureItem key={index} picture={picture} onImageClick={onImageClick} />
      ))}
    </S.PictureListContainer>
  )
}

export default PictureList
