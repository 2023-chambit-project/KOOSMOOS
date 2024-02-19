import type { SymmetryProps } from '@/pages/Game/Game.types'
import styled, { css, keyframes } from 'styled-components'

import Stardust from '/assets/game/game1/Stardust.svg'

export const PositionCSS = {
  center: css`
    justify-content: center;
    align-items: center;
  `,
  left: css`
    justify-content: center;
    align-items: start;
  `,
  right: css`
    justify-content: center;
    align-items: end;
  `,
  top: css`
    justify-content: start;
    align-items: center;
  `,
  bottom: css`
    justify-content: end;
    align-items: center;
  `,
}

export const space_walk = keyframes`
  0% {
    transform: translateY(-15%);
  }
  100% {
    transform: translateY(15%);
  }
`

export const StageWrapper = styled.div<SymmetryProps & { $bgColors: string[] }>`
  width: 100%;
  height: 120vh;
  position: relative;
  display: flex;
  flex-direction: column;
  background: linear-gradient(${({ $bgColors }) => $bgColors.join(', ')});
  ${({ align = 'center' }) => PositionCSS[align]}
`

export const StardustPattern = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${Stardust});
  background-repeat: repeat;
  background-size: 95%;
  overflow: hidden;
`
export const StageSymbolImage = styled.img<{ $isImgAnimating: boolean }>`
  position: absolute;

  width: 80%;
  ${({ $isImgAnimating }) =>
    $isImgAnimating &&
    css`
      animation: ${space_walk} 4.5s ease-in-out infinite alternate;
    `};
`
