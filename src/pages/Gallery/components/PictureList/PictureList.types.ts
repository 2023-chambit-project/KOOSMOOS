import type { NASAImageCoreProps } from '@/types'

export interface PictureListProps {
  pictures: NASAImageCoreProps[]
  onImageClick: (imageUrl: string) => void
}
