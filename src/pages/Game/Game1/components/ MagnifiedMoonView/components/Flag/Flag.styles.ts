import { FlexCenterCSS, FlexColumnCSS } from '@/styles'
import { css, styled } from 'styled-components'

export const Container = styled.div`
  width: 70%;
  height: 70%;
`

export const FlagImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 2px 2px 6px;
  margin-left: auto;
  margin-right: auto;
  ${FlexCenterCSS};
  background-color: ${({ theme }) => theme.COLOR.common.black};
`

export const FlagImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
`
export const Fixture = styled.img<{ direction: string }>`
  position: absolute;
  ${({ direction, theme }) =>
    direction.includes('top')
      ? css`
          top: 5.5%;
          @media screen and (max-width: ${theme.MEDIA.tablet}) {
            top: 3%;
          }
        `
      : css`
          bottom: 0;
          @media screen and (max-width: ${theme.MEDIA.tablet}) {
            bottom: -5%;
          }
        `}
  ${({ direction, theme }) =>
    direction.includes('Left')
      ? css`
          left: 0;
          @media screen and (max-width: ${theme.MEDIA.tablet}) {
            left: -5%;
          }
        `
      : css`
          transform: scaleX(-1);
          right: 0;
          @media screen and (max-width: ${theme.MEDIA.tablet}) {
            right: -5%;
          }
        `}
`

export const TextWrapper = styled.div`
  position: absolute;
  top: 17.5%;
  left: 17.5%;
  width: 65%;
  height: 65%;
  color: ${({ theme }) => theme.COLOR.common.white};
  ${FlexColumnCSS}
  ${FlexCenterCSS}
  gap: 2rem;
`

export const GreetingText = styled.h2`
  font-family: 'GwangyangSunshine-Bold';
  text-align: center;
  word-break: keep-all;
  font-style: italic;
  font-weight: 500;
  text-shadow: 1px 1px 1px ${({ theme }) => theme.COLOR.common.black};
`

export const UserNicknameText = styled.h3`
  font-family: 'GwangyangSunshine-Light';
  text-align: center;
  word-break: keep-all;
  font-style: italic;
  font-weight: 300;
  text-shadow: 1px 1px 1px ${({ theme }) => theme.COLOR.common.black};

  &::before {
    content: '-';
  }
  &::after {
    content: '-';
  }
`
