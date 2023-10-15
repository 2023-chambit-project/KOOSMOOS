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
const pulse = keyframes`
  0%, 100% {
    transform:translate(-50%, -120%) scale(1);
  }
  50% {
    transform:translate(-50%, -110%) scale(0.9);
  }
`
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
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

  background-color: ${({ posX, posY, theme }) =>
    (posX + posY) % 1.0 === 0.0 ? theme.PALETTE.blue[100] : theme.PALETTE.orange[100]};
  animation:
    ${stickDown} 0.15s ease-in forwards,
    ${pulse} 2s infinite 0.5s;

  &::after {
    content: 'Click!!';
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
    position: absolute;
    top: -100%;
    animation: ${fadeIn} 4s forwards;
  }
  cursor: pointer;
`
