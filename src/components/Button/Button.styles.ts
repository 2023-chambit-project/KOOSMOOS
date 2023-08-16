/* eslint-disable import/order */
import styled, { css } from 'styled-components'

import { FlexCenterCSS } from '@/styles'
import { StyleProps } from './Button.types'

export const variantCSS = {
  default: css`
    border-color: ${({ theme }) => theme.COLOR.common.white};
    color: ${({ theme }) => theme.COLOR.common.white};
    &:hover {
      background-color: ${({ theme }) => theme.COLOR.common.white};
      color: ${({ theme }) => theme.COLOR.common.black};
    }
    &:focus {
      background-color: ${({ theme }) => theme.COLOR.common.gray[700]};
      color: ${({ theme }) => theme.COLOR.common.white};
    }
  `,
  colored: css`
    border-color: ${({ theme }) => theme.PALETTE.blue[100]};
    color: ${({ theme }) => theme.PALETTE.blue[100]};
    &:hover {
      background-color: ${({ theme }) => theme.PALETTE.blue[100]};
      color: ${({ theme }) => theme.COLOR.common.white};
    }
    &:focus {
      background-color: ${({ theme }) => theme.PALETTE.blue[40]};
      color: ${({ theme }) => theme.COLOR.common.white};
    }
  `,
  alert: css`
    border-color: ${({ theme }) => theme.COLOR.alert[100]};
    color: ${({ theme }) => theme.COLOR.alert[100]};
    &:hover {
      background-color: ${({ theme }) => theme.COLOR.alert[100]};
      color: ${({ theme }) => theme.COLOR.common.white};
    }
    &:focus {
      background-color: ${({ theme }) => theme.COLOR.alert[40]};
      color: ${({ theme }) => theme.COLOR.common.white};
    }
  `,
  ghost: css`
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.COLOR.common.white};
    &:hover {
      background-color: ${({ theme }) => theme.COLOR.common.gray[200]};
      color: ${({ theme }) => theme.COLOR.common.black};
    }
    &:focus {
      border: 0.1rem dashed ${({ theme }) => theme.COLOR.common.white};
      background-color: ${({ theme }) => theme.COLOR.common.gray[800]};
      color: ${({ theme }) => theme.COLOR.common.white};
    }
  `,
}

export const sizeCSS = {
  default: css`
    width: 15rem;
  `,
  fit: css`
    width: fit-content;
  `,
  full: css`
    width: 100%;
  `,
}

export const contentSizeCSS = {
  default: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
  `,
  small: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
  `,
  large: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  `,
}

export const Button = styled.button<StyleProps>`
  ${FlexCenterCSS}
  gap: 1rem;

  height: 4rem;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-width: 0.1rem;
  border-style: solid;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLOR.common.gray[900]};

  white-space: nowrap;
  overflow: hidden;

  ${({ variant = 'default' }) => variantCSS[variant]};
  ${({ size = 'default' }) => sizeCSS[size]};
  ${({ contentSize = 'default' }) => contentSizeCSS[contentSize]};

  cursor: pointer;
`
