import { FlexCenterCSS } from '@/styles'
import { styled } from 'styled-components'

export const Barrel = styled.div`
  height: 88vh;
  width: 100%;
  ${FlexCenterCSS}
  background-color: ${({ theme }) => theme.PALETTE.blue[20]};
  overflow: hidden;
`

export const Joint = styled.div`
  width: 100rem;
  aspect-ratio: 1/1;
  border: 4px solid ${({ theme }) => theme.COLOR.common.black};
  border-radius: 100rem;
  ${FlexCenterCSS}
`

export const LunaSurface = styled.div`
  ${FlexCenterCSS}
  width: 60rem;
  height: 60rem;
`

export const YellowBase = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(253, 172, 03);
  border: 8px solid ${({ theme }) => theme.COLOR.common.black};
  border-radius: 100rem;

  button {
    position: absolute;
    top: 45%;
    z-index: 1;
    display: block;
    padding: 8px 6px;
    @media screen and (min-width: 1000px) {
      display: none;
    }
  }
`
