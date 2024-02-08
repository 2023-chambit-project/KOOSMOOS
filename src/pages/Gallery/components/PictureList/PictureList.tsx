import { NUMBER_OF_IMAGE_CALLS } from '@/constants'
import { useGetNASAImages } from '@/services/queries/gallery'
import { useEffect, useState } from 'react'
import { PictureItem, SkeletonPictureItem } from '..'
import { CATEGORY_MAP, NASA_IMAGE_BASE } from '../../gallery.constants'
import * as S from './PictureList.styles'
import type { PictureListProps } from './PictureList.types'

export const PictureList = ({ onImageClick, selectedCategory }: PictureListProps) => {
  const { data } = useGetNASAImages({ q: CATEGORY_MAP[selectedCategory] })

  const [isEachImageLoaded, setIsEachImageLoaded] = useState<Array<boolean>>(Array(NUMBER_OF_IMAGE_CALLS).fill(false))

  useEffect(() => {
    setIsEachImageLoaded(Array(NUMBER_OF_IMAGE_CALLS).fill(false))
  }, [selectedCategory])

  const pictures = data?.collection.items

  const onChangeImagesState = (targetIndex: number): void => {
    setIsEachImageLoaded((prev) => prev.map((_, index) => prev[index] || index == targetIndex))
  }

  return (
    <S.PictureListContainer>
      {Array.from({ length: NUMBER_OF_IMAGE_CALLS }).map((_, index) => (
        <S.PictureOneWrapper key={selectedCategory + index}>
          {!isEachImageLoaded[index] && <SkeletonPictureItem />}
          <PictureItem
            picture={pictures ? pictures[index] : NASA_IMAGE_BASE}
            onImageClick={onImageClick}
            onImageIsLoadedChange={() => onChangeImagesState(index)}
          />
        </S.PictureOneWrapper>
      ))}
    </S.PictureListContainer>
  )
}
