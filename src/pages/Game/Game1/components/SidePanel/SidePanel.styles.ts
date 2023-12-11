import { FlexColumnCSS } from '@/styles'
import { keyframes, styled } from 'styled-components'

export const Container = styled.div`
  @media screen and (max-width: 1000px) {
    display: none;
  }
  position: absolute;
  top: 15%;
  right: 0%;
  width: 22%;
  min-width: 240px;
  height: 75%;
  min-height: 360px;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 5px 0 0 5px;
  padding: 1rem;
  ${FlexColumnCSS}
  align-items: center;
  justify-content: space-evenly;
  font-family: 'GwangyangSunshine-Light';
  color: ${({ theme }) => theme.COLOR.common.white};
`

export const HeadingText = styled.p`
  text-align: center;
  font-weight: 900;
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  word-break: keep-all;
  margin: 0.5rem 0;
`
export const PointText = styled.p`
  color: ${({ theme }) => theme.PALETTE.yellow[100]};
  font-size: ${({ theme }) => theme.FONT_SIZE.big};
`

export const Divider = styled.div`
  background-color: ${({ theme }) => theme.COLOR.common.white};
  width: 70%;
  height: 1px;
  margin: 1rem;
`

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const PanelContentWrapper = styled.div`
  width: 100%;
  height: 55%;
  animation: ${fadeInAnimation} 0.5s ease;
`
