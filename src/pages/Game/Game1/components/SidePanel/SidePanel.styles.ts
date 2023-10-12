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
  margin: 2rem 0;
`
export const PointText = styled.span`
  color: ${({ theme }) => theme.PALETTE.yellow[100]};
  font-size: ${({ theme }) => theme.FONT_SIZE.big};
`

export const TrivialInfoContainer = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.MEDIA.laptop}) {
    display: none;
  }

  width: 100%;
  ${FlexColumnCSS}
  align-items: start;
  justify-content: center;
  padding: 0 2rem;
  margin-top: 1.5rem;
  gap: 0.5rem;
`

export const TrivialInfoInfoHeading = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
`

export const TrivialInfoInfoBody = styled.p`
  font-size: 1.1rem;
  word-break: keep-all;
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
