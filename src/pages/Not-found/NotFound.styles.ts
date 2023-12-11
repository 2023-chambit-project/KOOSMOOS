import { FlexAlignCSS, FlexBetweenCSS, FlexCenterCSS, FlexColumnCSS } from '@/styles'
import { styled } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  ${FlexCenterCSS}
  ${FlexColumnCSS}
  gap: 20px;
  background-color: ${({ theme }) => theme.COLOR.common.gray[200]};
`

export const TextImgContainer = styled.div`
  width: 55%;
  ${FlexBetweenCSS}
  height: 50vh;
  color: ${({ theme }) => theme.COLOR.common.black};
`

export const TextSection = styled.section`
  width: 50%;
  height: 100%;

  ${FlexColumnCSS}
  align-items: start;
  justify-content: center;
  word-wrap: break-word;

  font-family: 'GwangyangSunshine-Bold';
  font-weight: 400;
`

export const ButtonContainer = styled.div`
  width: 100%;
  ${FlexAlignCSS}
  justify-content: start;
  gap: 1rem;
`

export const HeadingText = styled.h1`
  font-size: 20rem;
  color: ${({ theme }) => theme.PALETTE.orange[100]};
  text-shadow:
    0px -3px 1px ${({ theme }) => theme.COLOR.common.black},
    3px 0px 1px ${({ theme }) => theme.COLOR.common.black},
    -3px 0px 1px ${({ theme }) => theme.COLOR.common.black},
    0px 3px 1px ${({ theme }) => theme.COLOR.common.black};
`

export const SubText = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
`

export const SymbolImage = styled.img`
  height: 100%;
  aspect-ratio: 1/1;
`
