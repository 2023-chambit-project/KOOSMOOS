import { FlexBetweenCSS, FlexColumnCSS, GYFontCSS } from '@/styles'
import { css, styled } from 'styled-components'
import { SymmetryProps } from './Game.types'

// 게임 타이틀과 참가버튼을 포함하는 영역
export const TitleAndButton = styled.div<SymmetryProps>`
  ${FlexColumnCSS}
  ${GYFontCSS}

  z-index: 2;
  position: absolute;
  ${({ align }) =>
    align === 'left'
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

// 스크린 반쪽을 할당
export const HalfBox = styled.div<SymmetryProps>`
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

    // 모달
    & > div {
      z-index: 1;
      opacity: 1;
      padding: 0 2rem;
      width: 35rem;
      color: white;
    }
    // 이미지
    & > img {
      opacity: 1;
      ${({ align }) =>
        align === 'left'
          ? css`
              transform: scale(1.25);
            `
          : css`
              transform: scale(1.25);
            `}
    }
    // 모달,이미지를 포함한 영역
    ${({ align }) =>
      align === 'left'
        ? css`
            transform: translateX(10%);
          `
        : css`
            transform: translateX(-10%);
          `}
  }
`
// 스크린을 좌우로 분리
export const DividedArea = styled.div`
  ${FlexBetweenCSS};
  width: 100%;
  height: 90vh;
  background-color: ${({ theme }) => theme.COLOR.common.black};
  overflow: hidden;
`
