export interface Picture {
  imageUrl: string
  title: string
  links: { href: string }[]
  data: { title: string }[]
}

export interface PictureListProps {
  pictures: Picture[]
  onImageClick: (imageUrl: string) => void
}
