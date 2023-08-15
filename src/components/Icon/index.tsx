import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

interface Props {
  color?: string
  size?: SizeProp
  icon: IconProp
  strokeWidth?: number
  strokeColor?: string
}

export const Icon: FC<Props> = ({ icon, color = 'white', size, ...rest }) => (
  <FontAwesomeIcon icon={icon} color={color} size={size} {...rest} />
)
