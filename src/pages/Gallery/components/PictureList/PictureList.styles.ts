import styled from 'styled-components'

export const PictureListContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 130px;

  @media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const PictureItemContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 8px;
`

export const PictureImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`

export const StyledListWrapper = styled.div`
  margin-top: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
