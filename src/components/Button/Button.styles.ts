import { FlexCenterCSS } from '@/styles'
import styled, { css } from 'styled-components'
import type { StyleProps } from './Button.types'

export const variantCSS = {
  default: css``,
  outlined: css`
    border-width: 0.2rem;
    border-style: solid;
  `,
}
export const sizeCSS = {
  default: css`
    min-width: 17rem;
    min-height: 5rem;
  `,
  fit: css`
    width: fit-content;
    height: fit-content;
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
    }
  `,
  dark: css`
    color: ${({ theme }) => theme.COLOR.common.black};
    border-color: ${({ theme }) => theme.COLOR.common.black};
    &:hover {
      color: ${({ theme }) => theme.COLOR.common.white};
      border-color: ${({ theme }) => theme.COLOR.common.white};
    }
  `,
}

export const Button = styled.button<StyleProps>`
  ${FlexCenterCSS}
  gap: 1rem;
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  padding: 0.5rem 1rem;

  ${({ variant = 'default' }) => variantCSS[variant]}
  ${({ size = 'default' }) => sizeCSS[size]}
  ${({ round = 'default' }) => roundCSS[round]}
  ${({ skin = 'default' }) => skinCSS[skin]}
  background-color: ${({ $bgColor, theme }) => ($bgColor ? $bgColor : theme.COLOR.common.gray[900])};

  transition:
    color 0.1s ease,
    background-color 0.2s ease,
    border-color 0.3s ease;

  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background-color: ${({ $hoverColor, theme }) => ($hoverColor ? $hoverColor : theme.COLOR.common.white)};
  }
`
