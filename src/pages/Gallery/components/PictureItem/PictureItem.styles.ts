import { FlexCenterCSS } from '@/styles'
import styled from 'styled-components'

export const PictureItemContainer = styled.div`
  width: 100%;
  ${FlexCenterCSS}
  flex-direction: column;
  gap: 40px;
  max-width: 250px;
  transition: transform 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`

export const PictureImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 8px 8px 0 0;

  @media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
    height: 230px;
  }
`

export const PictureName = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
  text-align: center;
`
