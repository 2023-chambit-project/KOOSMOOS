import styled from 'styled-components'

export const PictureListContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const PictureItemContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

export const StyledListWrapper = styled.div`
  margin-top: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1024px) {
    justify-content: flex-start;
  }
`
