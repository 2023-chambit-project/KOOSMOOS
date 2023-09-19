import * as S from './Footer.styles'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LOGO_IMAGE from '/public/assets/logo/logo_512x105.svg'

export const Footer = () => {
  return (
    <S.Footer>
      <S.MenuTab>
        <li>홈</li>
        <li>뉴스</li>
        <li>테크위치</li>
        <li>게임</li>
        <li>갤러리</li>
      </S.MenuTab>
      <S.Line>
        <S.IconMap>
          <FontAwesomeIcon icon={faEnvelope} size="xl" style={{ color: '#ffffff' }} />
        </S.IconMap>
      </S.Line>
      <S.BottomTab>
        <S.Logo src={LOGO_IMAGE} alt="logo" />
        <div>
          <p>koosmoos@gmail.com</p>
          <p>ⓒ 2023 Kwangwoon univ, Team LOSS All Rights Reserved.</p>
        </div>
      </S.BottomTab>
    </S.Footer>
  )
}
