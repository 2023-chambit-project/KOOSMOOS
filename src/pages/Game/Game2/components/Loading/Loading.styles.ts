import { FlexCenterCSS } from '@/styles'
import styled from 'styled-components'

export const Container = styled.section`
  width: 40%;
  ${FlexCenterCSS}
  flex-direction: column;
  padding-bottom: 22rem;
  margin-top: 10rem;
`

export const Title = styled.h1`
  font-weight: 800;
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  margin-bottom: 2rem;
`

export const Spinner = styled.div`
  width: 20rem;
  height: 20rem;
`
