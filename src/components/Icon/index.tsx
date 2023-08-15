import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

interface Props {
  color?: string
  size?: string
  icon: IconProp
  strokeWidth?: number
  strokeColor?: string
}

export const Icon: FC<Props> = ({ icon, color, size, ...rest }) => (
  <FontAwesomeIcon icon={icon} style={{ color: color, fontSize: size }} {...rest} />
)
