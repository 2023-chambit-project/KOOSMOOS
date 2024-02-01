import type { NASAImageCoreProps } from '@/types'
import type { MenuProps } from '../../gallery.types'

export interface PictureListProps {
  selectedCategory: MenuProps
  pictures: NASAImageCoreProps[]
  onImageClick: (imageUrl: string) => void
}
