import { IconProp } from '@fortawesome/fontawesome-svg-core'
import type { FC, HTMLAttributes, PropsWithChildren } from 'react'
import { Icon } from '../Icon'
import * as S from './Button.styles'
import type { StyleProps } from './Button.types'

interface Props extends HTMLAttributes<HTMLButtonElement>, StyleProps {
  icon?: IconProp
}

export const Button: FC<PropsWithChildren<Props>> = ({ children, icon, ...props }) => {
  return (
    <S.Button {...props}>
      {children}
      {icon && <Icon icon={icon} color="none" />}
    </S.Button>
  )
}
