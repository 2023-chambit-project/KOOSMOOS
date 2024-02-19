import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as S from './PowerButton.styles'

const PowerButton = ({ ...rest }) => {
  return (
    <S.ButtonWrapper {...rest}>
      <S.ButtonBody>
        <FontAwesomeIcon icon={faAngleDoubleUp} size="2xl" />
      </S.ButtonBody>
    </S.ButtonWrapper>
  )
}

export default PowerButton
