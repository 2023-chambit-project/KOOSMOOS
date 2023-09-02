import { FlexCenterCSS } from '@/styles'
import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.COLOR.common.black};
  color: ${({ theme }) => theme.COLOR.common.white};
  font-family: 'GwangyangSunshine-Bold';
  padding-top: 10rem;
  ${FlexCenterCSS}

  @media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
    padding: 14rem 0 38rem;
  }
`
