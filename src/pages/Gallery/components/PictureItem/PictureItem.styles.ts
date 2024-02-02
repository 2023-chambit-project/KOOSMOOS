import { COLOR, FlexCenterCSS } from '@/styles'
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
  background-color: ${COLOR.common.black};
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

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`
export const SkeletonPictureItemContainer = styled(PictureItemContainer)`
  position: absolute;
`
