import * as S from './Footer.styles'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { MAIN_NAV } from '@/constants'
import { useNavigate } from 'react-router-dom'
import LOGO_IMAGE from '/assets/logo/logo_512x105.svg'

export const Footer = () => {
  const navigate = useNavigate()

  const onClickToPage = (path: string) => {
    navigate(`/${path}`)
  }

  return (
    <S.Footer>
      <S.MenuTab>
        {MAIN_NAV.map((nav) => (
          <li key={nav.path} onClick={() => onClickToPage(nav.path)}>
            {nav.text}
          </li>
        ))}
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
