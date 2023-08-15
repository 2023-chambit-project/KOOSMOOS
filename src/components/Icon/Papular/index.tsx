import {
  faBars,
  faBell,
  faCheck,
  faCloud,
  faComment,
  faGlasses,
  faHeart,
  faHome,
  faImage,
  faLocation,
  faPhone,
  faSmile,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

interface Props {
  color?: string
  size?: string
}

export const Home: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faHome} style={{ color, fontSize: size }} {...rest} />
)
export const Glasses: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faGlasses} style={{ color, fontSize: size }} {...rest} />
)
export const Check: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faCheck} style={{ color, fontSize: size }} {...rest} />
)
export const Phone: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faPhone} style={{ color, fontSize: size }} {...rest} />
)
export const Star: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faStar} style={{ color, fontSize: size }} {...rest} />
)
export const Image: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faImage} style={{ color, fontSize: size }} {...rest} />
)
export const Bars: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faBars} style={{ color, fontSize: size }} {...rest} />
)
export const Location: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faLocation} style={{ color, fontSize: size }} {...rest} />
)
export const Heart: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faHeart} style={{ color, fontSize: size }} {...rest} />
)
export const Cloud: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faCloud} style={{ color, fontSize: size }} {...rest} />
)
export const Comment: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faComment} style={{ color, fontSize: size }} {...rest} />
)
export const Smile: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faSmile} style={{ color, fontSize: size }} {...rest} />
)
export const Bell: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faBell} style={{ color, fontSize: size }} {...rest} />
)
