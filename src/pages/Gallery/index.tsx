import * as S from './Gallery.styles'

import { useEffect, useState } from 'react'

import MenuBar from './components/Category'
import List from './components/PictureList'
import { categoryMap } from './gallery.constants'
import type { MenuProps } from './gallery.types'

const GalleryPage = () => {
  const [pictures, setPictures] = useState([])
  const [selectedCategory, setSelectedCategory] = useState<MenuProps>('행성')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<string>('')

  useEffect(() => {
    const apiUrl = `https://images-api.nasa.gov/search?q=${categoryMap[selectedCategory]}&media_type=image`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const photos = data.collection.items.map((item: any) => ({
          imageUrl: item.links[0].href,
          title: item.data[0].title,
          links: item.links,
        }))

        setPictures(photos.slice(0, 16))
      })
      .catch((error) => {
        console.error('Failed to load picture data.', error)
      })
  }, [selectedCategory])

  const handleImageClick = (url: string) => {
    setSelectedImage(url)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <S.Wrapper>
      <MenuBar setSelectedCategory={setSelectedCategory} />
      <List pictures={pictures} onImageClick={handleImageClick} />
      {isModalOpen && (
        <S.Modal onClick={handleCloseModal}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="" />
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Wrapper>
  )
}

export default GalleryPage
