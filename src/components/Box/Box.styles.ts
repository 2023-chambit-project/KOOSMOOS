import styled, { css } from 'styled-components'

import { StyleProps } from './Box.types'

export const variantCSS = {
  default: css`
    width: 24rem;
    height: 24rem;
  `,
  full: css`
    width: 100%;
    height: 100%;
  `,
}

export const Box = styled.div<StyleProps>`
  border-radius: 20px;
  ${({ variant = 'default' }) => variantCSS[variant]};
  background-color: ${({ bgColor }) => bgColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`
