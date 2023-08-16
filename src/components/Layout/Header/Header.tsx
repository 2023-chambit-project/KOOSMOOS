import { Button } from '@/components'
import { MainNav } from '@/constants'
import { faMailForward } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import * as S from './Header.styles'
export const Header: React.FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleNav = (path: `/${string}`) => {
    navigate(path)
  }

  return (
    <>
      <S.HeaderContainer>
        <S.LogoAndNavWrapper>
          <S.LogoIMG src="assets/logo/logo_512x105.svg" />
          <S.NavList>
            {MainNav.map((item, index) => (
              <S.NavItem
                onClick={() => handleNav(item.path)}
                $isActive={pathname === MainNav[index].path}
                key={item.text}
              >
                {item.text}
              </S.NavItem>
            ))}
          </S.NavList>
        </S.LogoAndNavWrapper>
        <Button icon={faMailForward}>우주 소식 받기</Button>
      </S.HeaderContainer>
    </>
  )
}
