import { FlexBetweenCSS, FlexColumnCSS, GYFontCSS } from '@/styles'
import { css, styled } from 'styled-components'
import type { HorizontalSymmetryProps } from '../../Game.types'

// 게임 타이틀과 참가버튼을 포함하는 영역
export const TitleAndButton = styled.div<HorizontalSymmetryProps>`
  ${FlexColumnCSS}
  ${GYFontCSS}

  z-index: 2;
  position: absolute;
  ${({ horizontalAlign }) =>
    horizontalAlign === 'left'
      ? css`
          left: 0;
          align-items: flex-start;
        `
      : css`
          right: 0;
          align-items: flex-end;
        `}
  align-self: flex-end;
  margin: 3rem 3rem;
  width: auto;
  height: auto;
  color: white;
  text-shadow: 2px 2px 2px ${({ theme }) => theme.COLOR.common.black};
  white-space: nowrap;
`

// 게임 이미지 관련
export const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.5;
  transition: transform 1s ease;
`

export const AlignedArea = styled.div<HorizontalSymmetryProps>`
  ${FlexBetweenCSS}
  width: 50%;
  height: 100%;
  transition:
    transform 1s ease,
    opacity 1s ease;
  z-index: 0;

  // 마이스가 이미지 위에 올려졌을 때,
  &:hover {
    z-index: 1;

    // ColorPalette
    & > div {
      z-index: 1;
      opacity: 1;
      padding: 0 2rem;
      width: 35rem;
      color: white;
    }
    // img
    & > img {
      opacity: 1;
      ${({ horizontalAlign }) =>
        horizontalAlign === 'left'
          ? css`
              transform: scale(1.25);
            `
          : css`
              transform: scale(1.25);
            `}
    }
    ${({ horizontalAlign }) =>
      horizontalAlign === 'left'
        ? css`
            transform: translateX(10%);
          `
        : css`
            transform: translateX(-10%);
          `}
  }
`
