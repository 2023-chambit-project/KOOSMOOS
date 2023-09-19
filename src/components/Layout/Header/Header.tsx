import { Button } from '@/components'
import { MainNav } from '@/constants'
import { faMailForward } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import * as S from './Header.styles'

import LOGO_IMAGE from '/public/assets/logo/logo_512x105.svg'

export const Header = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleNav = (path: string) => {
    navigate(`/${path}`)
  }

  return (
    <S.HeaderWrapper>
      <S.LogoIMG src={LOGO_IMAGE} alt="logo" onClick={() => handleNav('')} />
      <S.ContentSection>
        <S.NavList>
          {MainNav.map((item, index) => (
            <S.NavItem
              onClick={() => handleNav(item.path)}
              $isActive={item.path === '' ? pathname === '/' : pathname.includes(MainNav[index].path)}
              key={item.text}
            >
              {item.text}
            </S.NavItem>
          ))}
        </S.NavList>
        <Button icon={faMailForward}>우주 소식 받기</Button>
      </S.ContentSection>
    </S.HeaderWrapper>
  )
}
