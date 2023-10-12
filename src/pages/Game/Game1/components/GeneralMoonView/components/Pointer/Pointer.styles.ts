import type { LocationProp } from '@/pages/Game/Game1/Game1.types'
import { FlexCenterCSS } from '@/styles'
import { keyframes, styled } from 'styled-components'

const stickDown = keyframes`
  0% {
    transform: translate(-50%, -250%);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -120%);
    opacity: 1;
  }
`
export const Pointer = styled.div<LocationProp>`
  position: absolute;
  top: ${({ posY }) => ((-posY + 90) / 180) * 100}%;
  left: ${({ posX }) => ((-posX + 90) / 180) * 100}%;
  width: 10%;
  aspect-ratio: 1/1;
  border-radius: 100rem;
  background-color: ${({ theme }) => theme.PALETTE.orange[100]};
  border: 0.3rem solid ${({ theme }) => theme.COLOR.common.white};
  ${FlexCenterCSS}
  color: white;
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  &::before {
    content: '';
    position: absolute;
    top: 100%;
    border: 0.6rem solid transparent;
    border-top: 1rem solid ${({ theme }) => theme.COLOR.common.white};
  }
  animation: ${stickDown} 0.15s ease-in forwards;
`
