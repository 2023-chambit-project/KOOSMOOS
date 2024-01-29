import { FlexCenterCSS } from '@/styles'
import styled, { keyframes } from 'styled-components'
import type { StyleProps } from './Skeleton.type'

const opacity_transition = keyframes`
    0% {
      opacity: 0.7;
    }
    
    100% {
      opacity: 1;
    }
  
`
export const SkeltonWrapper = styled.div<StyleProps>`
  position: relative;
  overflow: hidden;
  width: ${({ width = '10rem' }) => width};
  height: ${({ height = '10rem' }) => height};
  border-radius: ${({ borderRadius = '1rem' }) => borderRadius};
`
/**
 * 깜박거리는 애니메이션 재생
 */
export const AnimationSkelton = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLOR.common.gray[600]};
  animation: ${opacity_transition} 1s ease-in-out infinite alternate;
`
/**
 * children component 를 skeleton component 중앙 전면에 배치
 */
export const OverlayContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  ${FlexCenterCSS}
`
