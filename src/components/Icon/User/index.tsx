import {
  faUser,
  faUserAlt,
  faUserAstronaut,
  faUserCircle,
  faUserDoctor,
  faUserGroup,
  faUserLarge,
  faUserSlash,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

interface Props {
  color?: string
  size?: string
}

export const User: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faUser} style={{ color, fontSize: size }} {...rest} />
)
export const UserAlt: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faUserAlt} style={{ color, fontSize: size }} {...rest} />
)
export const UserSlash: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faUserSlash} style={{ color, fontSize: size }} {...rest} />
)
export const UserCircle: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faUserCircle} style={{ color, fontSize: size }} {...rest} />
)
export const Users: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faUsers} style={{ color, fontSize: size }} {...rest} />
)
export const UserGroup: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faUserGroup} style={{ color, fontSize: size }} {...rest} />
)
export const UserLarge: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faUserLarge} style={{ color, fontSize: size }} {...rest} />
)
export const UserAstronaut: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faUserAstronaut} style={{ color, fontSize: size }} {...rest} />
)
export const UserDoctor: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faUserDoctor} style={{ color, fontSize: size }} {...rest} />
)
