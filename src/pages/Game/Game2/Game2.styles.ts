import { FlexCenterCSS } from '@/styles'
import styled from 'styled-components'

export const Wrapper = styled.main`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.common.black};
  color: ${({ theme }) => theme.COLOR.common.white};
  font-family: 'GwangyangSunshine-Bold';
  padding-top: 10rem;
  ${FlexCenterCSS}
  padding-bottom: 22rem;

  @media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
    padding: 14rem 0 38rem;
  }
`
