import React, { useState } from 'react'

import * as S from './Header.styles'

const Header: React.FC = () => {
  const NavigationFilter = ['홈', '뉴스', '테크위키', '게임', '갤러리']
  const [activeNavItem, setActiveNavItem] = useState<number>(0)
  return (
    <>
      <S.HeaderContainer>
        <S.LogoAndNavWrapper>
          <S.LogoIMG src="assets/logo/logo_512x105.svg" />
          <S.NavList>
            {NavigationFilter.map((item, index) => (
              <S.NavItem
                onClick={() => {
                  setActiveNavItem(index)
                }}
                $isActive={index === activeNavItem}
                key={item}
              >
                {item}
              </S.NavItem>
            ))}
          </S.NavList>
        </S.LogoAndNavWrapper>
        <h3>신청버튼</h3>
      </S.HeaderContainer>
    </>
  )
}

export default Header
