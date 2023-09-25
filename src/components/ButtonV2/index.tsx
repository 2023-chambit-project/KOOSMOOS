import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FC, HTMLAttributes, PropsWithChildren } from 'react'
import { Icon } from '../Icon'
import * as S from './ButtonV2.styles'
import type { StyleProps } from './ButtonV2.types'

interface Props extends HTMLAttributes<HTMLButtonElement>, StyleProps {
  icon?: IconProp
}

export const ButtonV2: FC<PropsWithChildren<Props>> = ({ children, icon, ...props }) => {
  return (
    <S.ButtonV2 {...props}>
      {children}
      {icon && <Icon icon={icon} color="none" />}
    </S.ButtonV2>
  )
}
