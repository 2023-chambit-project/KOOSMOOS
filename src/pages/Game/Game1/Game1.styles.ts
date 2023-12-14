import { FlexCenterCSS } from '@/styles'
import styled from 'styled-components'

export const NightSky = styled.div`
  height: 90vh;
  width: 100%;
  ${FlexCenterCSS};
  background-image: linear-gradient(
    50deg,
    ${({ theme }) => theme.PALETTE.blue[40]},
    ${({ theme }) => theme.PALETTE.purple[70]}
  );
`

export const MoonImgArea = styled.div``
export const VerticalListArea = styled.div``
