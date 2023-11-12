import * as React from 'react'
import * as S from './Gallery.styles'

import MenuBar from './components/Category'
import List from './components/PictureList'

type Picture = {
  imageUrl: string
  title: string
  links: { href: string }[]
}

const GalleryPage: React.FC = () => {
  const [pictures, setPictures] = React.useState<Picture[]>([])
  const [selectedCategory, setSelectedCategory] = React.useState<string>('행성')

  const categoryMap: { [key: string]: string } = {
    행성: 'planet',
    우주: 'cosmos',
    발사체: 'space launch vehicle',
    인공위성: 'satellite',
  }

  React.useEffect(() => {
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
  }, [selectedCategory, categoryMap])

  const handleImageClick = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <S.Wrapper>
      <MenuBar
        setSelectedCategory={(category: string) => {
          setSelectedCategory(category)
        }}
      />
      <List pictures={pictures} onImageClick={handleImageClick} />
    </S.Wrapper>
  )
}

export default GalleryPage
