import styled, { keyframes } from 'styled-components'
import type { ShapeProps } from './Skeleton.type'

const opacity_transition = keyframes`
    0% {
      opacity: 0.7;
    }
    
    100% {
      opacity: 1;
    }
  
`

export const AnimationSkelton = styled.div<ShapeProps>`
  width: ${({ width = '10rem' }) => width};
  height: ${({ height = '10rem' }) => height};
  border-radius: ${({ borderRadius = '1rem' }) => borderRadius};
  background-color: ${({ theme }) => theme.COLOR.common.gray[600]};
  animation: ${opacity_transition} 1s ease-in-out infinite alternate;
`
