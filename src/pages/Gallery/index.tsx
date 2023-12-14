import * as S from './Gallery.styles'

import { useState } from 'react'

import { MenuBar, PictureList } from './components'

import { useGetNASAImages } from '@/services/queries/gallery'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { categoryMap } from './gallery.constants'
import type { MenuProps } from './gallery.types'

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuProps>('행성')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')

  const { data } = useGetNASAImages({ q: categoryMap[selectedCategory] })
  const pictures = data?.collection.items

  const onClickImage = (url: string) => {
    setSelectedImage(url)
    setIsModalOpen(true)
  }

  const onClickBackgroundToModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <S.Wrapper>
      <MenuBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <PictureList pictures={pictures ?? []} onImageClick={onClickImage} />
      {isModalOpen && (
        <S.Modal onClick={onClickBackgroundToModalClose}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.CloseIcon>
              <FontAwesomeIcon icon={faXmark} color="black" size="xl" onClick={onClickBackgroundToModalClose} />
            </S.CloseIcon>
            <S.ModalImage src={selectedImage} alt={`${selectedImage}`} />
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Wrapper>
  )
}

export default GalleryPage
