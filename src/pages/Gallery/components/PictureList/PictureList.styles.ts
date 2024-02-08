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
export const PictureOneWrapper = styled.div`
  width: 25rem;
  max-width: 25rem;
  height: 50rem;
  position: relative;
`
