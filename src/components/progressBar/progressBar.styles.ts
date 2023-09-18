import styled from 'styled-components'
import type { BorderRadiusSize, HeightSize } from './progressBar.types'

export const heightCSS = {
  default: '20px',
  medium: '26px',
  fat: '32px',
}

export const borderRadiusCSS = {
  default: '10px',
  square: '0',
}

export const ProgressBarContainer = styled.div<{ heightSize?: HeightSize; borderRadius?: BorderRadiusSize }>`
  width: 100%;
  background-color: ${({ theme }) => theme.COLOR.common.gray[400]};
  height: ${({ heightSize = 'default' }) => heightCSS[heightSize]};
  border-radius: ${({ borderRadius = 'default' }) => borderRadiusCSS[borderRadius]};
`

export const FilledProgress = styled.div<{ percentage: number; bgColor: string; borderRadius?: BorderRadiusSize }>`
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};

  /* props로 받은 비율에 따라 너비 결정 */
  width: ${({ percentage }) => (percentage ? `${percentage}%` : '0%')};
  border-radius: ${({ borderRadius = 'default' }) => borderRadiusCSS[borderRadius]};
  transition: width 0.5s ease-out;
`
