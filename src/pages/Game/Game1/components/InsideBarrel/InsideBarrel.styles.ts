import { FlexCenterCSS } from '@/styles'
import { styled } from 'styled-components'

export const Barrel = styled.div`
  height: 88vh;
  width: 100%;
  ${FlexCenterCSS}
  background-color: ${({ theme }) => theme.PALETTE.blue[20]};
  overflow: hidden;
`

export const Joint = styled.div<{ size: string }>`
  width: ${({ size }) => size};
  aspect-ratio: 1/1;
  border: 2px solid ${({ theme }) => theme.COLOR.common.black};
  border-radius: 100rem;
  ${FlexCenterCSS}
  transform: translateX(-8%);
  @media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
    transform: none;
  }
`
