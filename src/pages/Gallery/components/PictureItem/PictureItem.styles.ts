import { Skeleton } from '@/components'
import { FlexCenterCSS, FlexColumnCSS } from '@/styles'
import styled from 'styled-components'

export const PictureItemContainer = styled.div`
  width: 100%;
  ${FlexCenterCSS}
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`
export const PictureImage = styled.img`
  width: 100%;
  height: 30rem;
  border-radius: 8px;

  @media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
    height: 230px;
  }
`
export const PictureName = styled.p`
  width: 100%;
  font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
  text-align: center;

  /** 세 줄 이상 설명시, ... 으로 대체 */
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`

export const SkeletonPictureItemContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  ${FlexColumnCSS}
  gap: 1rem;

  background-color: ${({ theme }) => theme.COLOR.common.black};
`

export const SkeletonPictureImage = styled(Skeleton)`
  width: 100%;
  height: 300px;
  border-radius: 8px;
`

export const SkeletonPictureName = styled(Skeleton)`
  width: 100%;
  height: 6rem;
  border-radius: 8px;
`
