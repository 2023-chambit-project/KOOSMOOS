import { GameMainAlign } from '@/constants'
import { FlexColumnCSS, GYFontCSS, PCFontCSS } from '@/styles'
import { css, styled } from 'styled-components'
import { PositionProps } from '../../Game.types'

// 하얀 구분선
export const Divider = styled.div`
  width: 100%;
  height: 0.2rem;
  background-color: ${({ theme }) => theme.COLOR.common.white};
  box-shadow: 0.05rem 0.05rem 0.05rem ${({ theme }) => theme.COLOR.common.black};
`
// 주제목
export const MainHeading = styled.h1`
  ${PCFontCSS}
  font-size: ${({ theme }) => theme.FONT_SIZE.huge};
`
// 부제목
export const SubHeading = styled.h3`
  ${PCFontCSS}
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
`
// 설명글
export const IntroductionDetail = styled.li`
  ${GYFontCSS}
  font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
  margin: 1rem;
  &::before {
    content: '- ';
  }
`
// 인용문구
export const Quotation = styled.h3`
  ${PCFontCSS}
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  font-style: italic;
  &::before {
    content: '“';
  }
  &::after {
    content: '”';
  }
`
export const SideOpenDescription = styled.div<PositionProps>`
  ${FlexColumnCSS}
  align-items: start;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  width: 0%;
  position: absolute;
  opacity: 0;
  padding: 0;
  text-align: left;
  gap: 2rem;
  color: ${({ theme }) => theme.COLOR.common.white};
  text-shadow: 0.05rem 0.05rem 0.05rem ${({ theme }) => theme.COLOR.common.black};
  word-break: keep-all;
  background-color: ${({ align }) => GameMainAlign[align].mainColor};

  transition:
    opacity 1s ease 8ms,
    width 5ms ease-out 8ms;

  ${({ align }) =>
    align === 'left'
      ? css`
          right: 0;
          transform: translateX(75%);
        `
      : css`
          left: 0;
          transform: translateX(-75%);
        `}
`
