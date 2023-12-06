/*
import * as S from './Gallery.styles'
import { useEffect, useState } from 'react'
import MenuBar from './components/Category'
import List from './components/PictureList'
import { categoryMap } from './gallery.constants'

const GalleryPage = () => {
  const [data, setData] = useState('')
  const [pictures, setPictures] = useState([])
  const [selectedCategory, setSelectedCategory] = useState<'행성' | '우주' | '발사체' | '인공위성'>('행성')

  useEffect(() => {
    const apiUrl = `https://images-api.nasa.gov/search?q=${categoryMap[selectedCategory]}&media_type=image`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
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
    window.open(url, '_blank')
  }

  return (
    <S.Wrapper>
      <MenuBar setSelectedCategory={setSelectedCategory} />
      <List pictures={pictures} onImageClick={handleImageClick} />
    </S.Wrapper>
  )
}

export default GalleryPage
*/

import * as S from './Gallery.styles'

import { useEffect, useState } from 'react'

import List from './components/PictureList'
import MenuBar from './components/Category'
import { categoryMap } from './gallery.constants'

const GalleryPage = () => {
  const [data, setData] = useState('')
  const [pictures, setPictures] = useState([])
  const [selectedCategory, setSelectedCategory] = useState<'행성' | '우주' | '발사체' | '인공위성'>('행성')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<string>('')

  useEffect(() => {
    const apiUrl = `https://images-api.nasa.gov/search?q=${categoryMap[selectedCategory]}&media_type=image`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
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
