export interface Picture {
  imageUrl: string
  title: string
  links: { href: string }[]
  data: { title: string }[]
}

export interface PictureItemProps {
  picture: Picture
  onImageClick: (imageUrl: string) => void
}
