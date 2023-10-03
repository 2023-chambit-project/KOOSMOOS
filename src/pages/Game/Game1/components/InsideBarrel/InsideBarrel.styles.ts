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
