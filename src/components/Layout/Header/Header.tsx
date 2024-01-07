import { Button } from '@/components'
import { MainNav } from '@/constants'
import { faMailForward } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'
import * as S from './Header.styles'

import LOGO_IMAGE from '/assets/logo/logo_512x105.svg'

export const Header = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleNav = (path: string) => {
    navigate(`/${path}`)
  }

  const redirectToGoogleForm = () => {
    const googleFormUrl =
      'https://docs.google.com/forms/d/e/1FAIpQLSe41X2RJEMhr8B88J-509Y41hVzgDisBP5WcmflpWtOCbdSJQ/viewform?usp=sf_link'

    window.open(googleFormUrl, '_blank')
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
        <Button icon={faMailForward} $bgColor="transparent" variant="outlined" onClick={redirectToGoogleForm}>
          우주소식 받기
        </Button>
      </S.ContentSection>
    </S.HeaderWrapper>
  )
}
