import { FlexAlignCSS, FlexCenterCSS, FlexColumnCSS, PCFontCSS } from '@/styles'
import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  position: fixed;
  z-index: 3;
  ${FlexCenterCSS}
  background-color: #00000099;
  color: ${({ theme }) => theme.COLOR.common.white};
`
export const MainCard = styled.div`
  width: fit-content;
  height: fit-content;
  ${FlexColumnCSS}
  justify-content: start;
  gap: 1.7rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLOR.common.gray[900]};
  padding: 2rem 5rem;
`
export const DestinationText = styled.h3`
  position: absolute;
  bottom: 1rem;
  right: 10px;
  text-shadow: 1px 1px 1px ${({ theme }) => theme.COLOR.common.black};
`
export const DistanceFromEarthText = styled.p`
  font-size: 1rem;
  font-style: italic;
  align-self: end;
  ${PCFontCSS}
`
export const ScoreContainer = styled.section`
  width: 100%;
  ${FlexAlignCSS}
  justify-content: start;
  gap: 5px;
`
export const Score = styled.p`
  ${PCFontCSS}
`
export const ImageContainer = styled.section<{ $bgColor: string }>`
  width: 250px;
  height: 250px;
  position: relative;
  ${FlexCenterCSS}

  background-color: ${({ $bgColor }) => $bgColor};
  border-radius: 2rem;
`
export const AbsoluteImage = styled.img`
  position: absolute;
  width: 90%;
  border-radius: 2rem;
`
