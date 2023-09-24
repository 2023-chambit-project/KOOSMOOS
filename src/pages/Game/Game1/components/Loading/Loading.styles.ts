import { FlexCenterCSS, FlexColumnCSS } from '@/styles'
import { styled } from 'styled-components'

export const YellowGround = styled.div`
  height: 90vh;
  width: 100%;
  background-color: ${({ theme }) => theme.PALETTE.yellow[100]};
  ${FlexCenterCSS}
  flex-direction: column;
`

export const LoadingText = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  font-family: 'PyeongChangPeace-Light';
  word-break: keep-all;
  text-align: center;
  /* color: ${({ theme }) => theme.COLOR.common.white}; */
`

export const CenterCircle = styled.div`
  width: 20%;
  aspect-ratio: 1/1;
  border-radius: 100rem;
  background-color: ${({ theme }) => theme.PALETTE.yellow[40]};
  ${FlexCenterCSS}
  ${FlexColumnCSS}
  margin: 5rem;
`
