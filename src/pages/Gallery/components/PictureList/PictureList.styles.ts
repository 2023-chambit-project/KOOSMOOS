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

export const PictureImageWrapper = styled.div`
  width: 25rem;
  max-width: 25rem;
  position: relative;
`
