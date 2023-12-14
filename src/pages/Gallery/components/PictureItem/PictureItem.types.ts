import type { NASAImageCoreProps } from '@/types'

export interface Picture {
  imageUrl: string
  title: string
  links: { href: string }[]
  data: { title: string }[]
}

export interface PictureItemProps {
  picture: NASAImageCoreProps
  onImageClick: (imageUrl: string) => void
}
