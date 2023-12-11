import { FlexCenterCSS } from '@/styles'
import styled, { css } from 'styled-components'
import type { StyleProps } from './ButtonV2.types'

export const variantCSS = {
  default: css``,
  outlined: css`
    border-width: 0.2rem;
    border-style: solid;
  `,
}
export const sizeCSS = {
  default: css`
    width: 17rem;
  `,
  fit: css`
    width: fit-content;
    height: fit-content;
    padding: 0.5rem 1rem;
  `,
  full: css`
    width: 100%;
  `,
}
export const roundCSS = {
  default: css`
    border-radius: 8px;
  `,
  slightly: css`
    border-radius: 15px;
  `,
  very: css`
    border-radius: 30px;
  `,
}
export const skinCSS = {
  default: css`
    color: ${({ theme }) => theme.COLOR.common.white};
    border-color: ${({ theme }) => theme.COLOR.common.white};

    &:hover {
      color: ${({ theme }) => theme.COLOR.common.black};
      border-color: ${({ theme }) => theme.COLOR.common.black};
      background-color: ${({ theme }) => theme.COLOR.common.white};
    }
  `,
  dark: css`
    color: ${({ theme }) => theme.COLOR.common.black};
    border-color: ${({ theme }) => theme.COLOR.common.black};
    &:hover {
      color: ${({ theme }) => theme.COLOR.common.white};
      border-color: ${({ theme }) => theme.COLOR.common.white};
      background-color: ${({ theme }) => theme.COLOR.common.black};
    }
  `,
}

export const ButtonV2 = styled.button<StyleProps>`
  ${FlexCenterCSS}
  gap: 1rem;
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  height: 5rem;

  ${({ variant = 'default' }) => variantCSS[variant]}
  ${({ size = 'default' }) => sizeCSS[size]}
  ${({ round = 'default' }) => roundCSS[round]}
  ${({ skin = 'default' }) => skinCSS[skin]}
  background-color: ${({ bgColor, theme }) => (bgColor ? bgColor : theme.COLOR.common.gray[900])};

  transition:
    color 0.1s ease,
    background-color 0.2s ease,
    border-color 0.3s ease;

  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
`