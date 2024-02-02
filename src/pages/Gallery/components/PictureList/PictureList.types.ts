import type { MenuProps } from '../../gallery.types'

export interface PictureListProps {
  selectedCategory: MenuProps
  onImageClick: (imageUrl: string) => void
}
