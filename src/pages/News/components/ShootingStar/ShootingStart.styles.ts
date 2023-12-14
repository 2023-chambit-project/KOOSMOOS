import styled, { keyframes } from 'styled-components'

const tail = keyframes`
    0% {
      width: 0;
    }
    
    30% {
      width: 100px;
    }
    
    100% {
      width: 0;
    }
`

const shining = keyframes`
    0% {
      transform: translateX(0);
    }
    
    100% {
      transform: translateX(-100vw);
    }
  
`

const shooting = keyframes`
    0% {
      transform: translateX(0);
    }
    
    100% {
      transform: translateX(300px);
    }
  
`

const sky = keyframes`
    0% {
      transform: rotate(45deg);
    }

    100% {
      transform: rotate(45 + 360deg);
    }

`

const shootingTime = `${2000 + Math.random() * 3000}ms`

export const Background = styled.section`
  width: 100%;
`

export const Night = styled.div`
  position: relative;
  transform: rotateZ(45deg);
  animation: ${sky} 200000ms linear infinite;
`

export const Shooting_star = styled.div<{ left: number; top: number; delay: number }>`
  position: absolute;
  left: ${({ left }) => `${left}px`};
  top: ${({ top }) => `${top}px`};
  animation-delay: ${({ delay }) => `${delay}ms`};
  height: 2px;
  background: linear-gradient(-45deg, rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
  border-radius: 999px;
  filter: drop-shadow(0 0 6px rgba(105, 155, 255, 1));
  animation:
    ${tail} ${shootingTime} ease-in-out infinite,
    ${shooting} ${shootingTime} ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    height: 2px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
    transform: translateX(50%) rotateZ(45deg);
    border-radius: 100%;
    animation: ${shining} ${shootingTime} ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    height: 2px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
    transform: translateX(50%) rotateZ(45deg);
    border-radius: 100%;
    animation: ${shining} ${shootingTime} ease-in-out infinite;
    transform: translateX(50%) rotateZ(-45deg);
  }
`
