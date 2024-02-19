import { FlexColumnCSS } from '@/styles'
import { css, keyframes, styled } from 'styled-components'

const fade_in = keyframes`
  from {
    opacity: 0; 
  }
  to {
    opacity: 1;
  }
`
const space_flight = keyframes`
  0%{
    transform: translateX(0%);
  }
  100%{
    transform: translateX(30%) 
    translateY(-30%);
  }
`
export const RocketWrapper = styled.div<{ $isFlameStarted: boolean }>`
  width: fit-content;
  height: 8rem;
  position: absolute;
  bottom: 2.5rem;
  ${FlexColumnCSS}
  ${({ $isFlameStarted }) =>
    $isFlameStarted &&
    css`
      animation: ${space_flight} 3s 1s ease-in-out infinite alternate;
    `}
`
export const RocketBody = styled.img`
  height: 75%;
  object-fit: contain;
`
export const Flame = styled.img`
  height: 25%;
  object-fit: contain;
  animation: ${fade_in} 3s ease-in-out;
`
