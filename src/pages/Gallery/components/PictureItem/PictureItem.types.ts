import type { NASAImageCoreProps } from '@/types'
import { Dispatch, SetStateAction } from 'react'

export interface Picture {
  imageUrl: string
  title: string
  links: { href: string }[]
  data: { title: string }[]
}

export interface PictureItemProps {
  picture: NASAImageCoreProps
  index: number
  onImageClick: (imageUrl: string) => void
  setIsEachImgLoaded: Dispatch<SetStateAction<Array<boolean>>>
}
