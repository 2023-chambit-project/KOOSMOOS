import { FlexCenterCSS } from '@/styles'
import { styled } from 'styled-components'

export const Barrel = styled.div`
  height: 85vh;
  width: 100%;
  ${FlexCenterCSS}
  background-color: ${({ theme }) => theme.PALETTE.blue[20]};
`

export const Joint = styled.div<{ size: string; width: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border: ${({ width }) => width} solid ${({ theme }) => theme.COLOR.common.black};
  border-radius: 100rem;
  ${FlexCenterCSS}
`
