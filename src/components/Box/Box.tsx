import * as S from './Box.styles'

import type { FC, HTMLAttributes, PropsWithChildren } from 'react'

import type { StyleProps } from './Box.types'

interface Props extends HTMLAttributes<HTMLDivElement>, StyleProps {}

export const Box: FC<Props> = ({ children, ...props }: PropsWithChildren<Props>) => {
  return <S.Box {...props}>{children}</S.Box>
}
