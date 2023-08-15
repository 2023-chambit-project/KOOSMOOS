import {
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faArrowAltCircleUp,
  faArrowCircleDown,
  faArrowCircleLeft,
  faArrowCircleRight,
  faArrowCircleUp,
  faArrowDown,
  faArrowLeft,
  faArrowPointer,
  faArrowRight,
  faArrowRotateBack,
  faArrowRotateBackward,
  faArrowRotateForward,
  faArrowRotateLeft,
  faArrowRotateRight,
  faArrowTurnDown,
  faArrowTurnRight,
  faArrowTurnUp,
  faArrowUp,
  faChevronCircleDown,
  faChevronCircleLeft,
  faChevronCircleRight,
  faChevronCircleUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

interface Props {
  color?: string
  size?: string
  strokeWidth?: number
  strokeColor?: string
}

export const ArrowAltCircleDown: FC<Props> = ({ color, size, strokeWidth, strokeColor, ...rest }) => (
  <FontAwesomeIcon
    icon={faArrowAltCircleDown}
    style={{ color, fontSize: size, strokeWidth: strokeWidth, stroke: strokeColor }}
    {...rest}
  />
)
export const ArrowAltCircleLeft: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faArrowAltCircleLeft} style={{ color, fontSize: size }} {...rest} />
)
export const ArrowAltCircleRight: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faArrowAltCircleRight} style={{ color, fontSize: size }} {...rest} />
)
export const ArrowAltCircleUp: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faArrowAltCircleUp} style={{ color, fontSize: size }} {...rest} />
)
export const ArrowCircleDown: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faArrowCircleDown} style={{ color, fontSize: size }} {...rest} />
)
export const ArrowCircleLeft: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faArrowCircleLeft} style={{ color, fontSize: size }} {...rest} />
)
export const ArrowCircleRight: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faArrowCircleRight} style={{ color, fontSize: size }} {...rest} />
)
export const ArrowCircleUp: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faArrowCircleUp} style={{ color, fontSize: size }} {...rest} />
)
export const ArrowDown: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faArrowDown} style={{ color, fontSize: size }} {...rest} />
)
export const ArrowLeft: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faArrowLeft} style={{ color, fontSize: size }} {...rest} />
)
export const ArrowPointer: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faArrowPointer} style={{ color, fontSize: size }} {...rest} />
)
export const ArrowRotateForward: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faArrowRotateForward} style={{ color, fontSize: size }} {...rest} />
)
export const ArrowRight: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faArrowRight} style={{ color, fontSize: size }} {...rest} />
)
export const ArrowRotateBackward: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faArrowRotateBackward} style={{ color, fontSize: size }} {...rest} />
)
export const ArrowRotateBack: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faArrowRotateBack} style={{ color, fontSize: size }} {...rest} />
)
export const ArrowUp: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faArrowUp} style={{ color, fontSize: size }} {...rest} />
)
export const ArrowRotateLeft: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faArrowRotateLeft} style={{ color, fontSize: size }} {...rest} />
)
export const ArrowRotateRight: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faArrowRotateRight} style={{ color, fontSize: size }} {...rest} />
)
export const ArrowTurnUp: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faArrowTurnUp} style={{ color, fontSize: size }} {...rest} />
)
export const ArrowTurnDown: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faArrowTurnDown} style={{ color, fontSize: size }} {...rest} />
)
export const ArrowTurnRight: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faArrowTurnRight} style={{ color, fontSize: size }} {...rest} />
)
export const ChevronUp: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faChevronUp} style={{ color, fontSize: size }} {...rest} />
)
export const ChevronCircleDown: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faChevronCircleDown} style={{ color, fontSize: size }} {...rest} />
)
export const ChevronCircleUp: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faChevronCircleUp} style={{ color, fontSize: size }} {...rest} />
)
export const ChevronRight: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faChevronRight} style={{ color, fontSize: size }} {...rest} />
)
export const ChevronCircleRight: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faChevronCircleRight} style={{ color, fontSize: size }} {...rest} />
)
export const ChevronDown: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faChevronDown} style={{ color, fontSize: size }} {...rest} />
)
export const ChevronLeft: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faChevronLeft} style={{ color, fontSize: size }} {...rest} />
)
export const ChevronCircleLeft: FC<Props> = ({ color, size, ...rest }) => (
  <FontAwesomeIcon icon={faChevronCircleLeft} style={{ color, fontSize: size }} {...rest} />
)
