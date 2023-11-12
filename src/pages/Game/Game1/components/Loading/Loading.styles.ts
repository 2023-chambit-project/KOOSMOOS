import { FlexCenterCSS, FlexColumnCSS } from '@/styles'
import styled from 'styled-components'

export const Background = styled.div<{ bgColor: string }>`
  height: 90vh;
  width: 100%;
  ${FlexCenterCSS}
  flex-direction: column;
  background-color: ${({ bgColor }) => bgColor};
`

export const LoadingText = styled.h1<{ textColor: string }>`
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  color: ${({ textColor }) => textColor};
  font-family: 'PyeongChangPeace-Light';
  word-break: keep-all;
  text-align: center;
`

export const CenterCircle = styled.div<{ circleColor: string }>`
  width: 20%;
  aspect-ratio: 1/1;
  border-radius: 100rem;
  background-color: ${({ circleColor }) => circleColor};
  ${FlexCenterCSS}
  ${FlexColumnCSS}
  margin: 5rem;
`
