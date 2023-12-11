import { FlexAlignCSS, FlexColumnCSS } from '@/styles'
import { styled } from 'styled-components'

export const FlagContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  padding: 0 5%;
  ${FlexAlignCSS}
`

export const FlagImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  text-align: center;
`

export const BackLight = styled.div`
  position: absolute;
  top: 16%;
  left: 20%;
  width: 60%;
  height: 60%;
  background-color: ${({ theme }) => theme.COLOR.common.black};
`
export const FlagImage = styled.img`
  position: absolute;
  top: 16%;
  left: 20%;
  width: 60%;
  height: 60%;
  object-fit: cover;
  opacity: 0.6;
`

export const Fixture = styled.img`
  top: 0%;
  left: 0%;
  position: absolute;
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
`
export const TextWrapper = styled.div`
  top: 16%;
  left: 22%;
  position: absolute;
  width: 55%;
  height: 60%;
  color: ${({ theme }) => theme.COLOR.common.white};
  ${FlexColumnCSS}
  justify-content: center;
  gap: 2rem;
  word-wrap: keep-all;
  overflow-wrap: break-word;
`

export const GreetingText = styled.h2`
  font-family: 'GwangyangSunshine-Bold';
  font-style: italic;
  font-weight: 500;
  text-shadow: 1.5px 1.5px 1.5px ${({ theme }) => theme.COLOR.common.black};
  word-break: break-all;
`

export const UserNicknameText = styled.h3`
  font-family: 'GwangyangSunshine-Light';
  text-align: center;
  font-style: italic;
  font-weight: 400;
  text-shadow: 1px 1px 1px ${({ theme }) => theme.COLOR.common.black};
  &::before {
    content: ' - ';
  }
  &::after {
    content: ' - ';
  }
`
