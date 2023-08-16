import * as S from './Box.styles'

import type { FC, HTMLAttributes, PropsWithChildren } from 'react'

import type { StyleProps } from './Box.types'

interface Props extends HTMLAttributes<HTMLDivElement>, StyleProps {}

export const Box: FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
  return <S.Box {...props}>{children}</S.Box>
}
