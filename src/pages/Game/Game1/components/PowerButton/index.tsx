import { Icon } from '@/components/Icon'
import { theme } from '@/styles'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import * as S from './PowerButton.styles'

export const PowerButton = ({ ...rest }) => {
  return (
    <S.ButtonWrapper {...rest}>
      <S.ButtonBody>
        <Icon icon={faAngleDoubleUp} size="2xl" color={theme.COLOR.common.white} />
      </S.ButtonBody>
    </S.ButtonWrapper>
  )
}
