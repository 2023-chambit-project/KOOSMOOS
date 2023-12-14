import styled from 'styled-components'

export const PictureItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 250px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`

export const PictureImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
`

export const PictureName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;
`
