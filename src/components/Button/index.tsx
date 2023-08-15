import { useState, type FC, type HTMLAttributes, type PropsWithChildren } from 'react'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Icon } from '../Icon'
import * as S from './Button.styles'
import type { StyleProps } from './Button.types'

interface Props extends HTMLAttributes<HTMLButtonElement>, StyleProps {
  icon?: IconProp
  onClick?: () => void
}

export const Button: FC<Props> = ({ children, icon, onClick, ...props }: PropsWithChildren<Props>) => {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => {
      setIsClicked(false)
    }, 150)
    if (onClick) {
      onClick()
    }
  }
  return (
    <S.Button {...props} onClick={handleClick} className={isClicked ? 'clicked' : ''}>
      {children}
      {icon && <Icon icon={icon} color="none" />}
    </S.Button>
  )
}
