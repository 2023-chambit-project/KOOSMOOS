import React, { useState } from 'react'
import { styled } from 'styled-components'

import { FlexAlignCSS, FlexBetweenCSS } from '../../../styles'

const Header: React.FC = () => {
  const navItems: string[] = ['홈', '뉴스', '테크위키', '게임', '갤러리']
  const [activeNavItem, setActiveNavItem] = useState<number>(0)
  return (
    <>
      <HeaderContainer>
        <LogoAndNavWrapper>
          <h1>KOOSMOOS</h1>
          <NavList>
            {navItems.map((item, index) => (
              <NavItem
                onClick={() => {
                  console.log(index)
                  setActiveNavItem(index)
                }}
                isactive={index === activeNavItem ? 'true' : 'false'}
                key={index}
              >
                {item}
              </NavItem>
            ))}
          </NavList>
        </LogoAndNavWrapper>
        <BtnWrapper>
          <h3>신청버튼</h3>
        </BtnWrapper>
      </HeaderContainer>
    </>
  )
}

// 헤더 영역
const HeaderContainer = styled.header`
  width: 100%;
  position: sticky;
  top: 0%;
  padding: 1% 5%;
  ${FlexBetweenCSS};
  justify-content: space-around;
  color: ${({ theme }) => theme.COLOR.common.white};
  background-color: ${({ theme }) => theme.COLOR.common.black};
`

// Logo 와 NavBar 를 감싼 영역
const LogoAndNavWrapper = styled.div`
  ${FlexBetweenCSS};
  width: 100%;
  @media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
    // mobile 화면에서 해당 영역은 세로 정렬
    flex-direction: column;
    align-items: start;
  }
`

// Button 을 감싼 영역
const BtnWrapper = styled.div`
  ${FlexAlignCSS};
  justify-content: end;
  width: 100%;
`

const NavList = styled.ul`
  display: flex;
  margin-left: 20px;
  margin-top: 10px;
  gap: 20px;
`

const NavItem = styled.li<{ isactive: string }>`
  /* ... */
  position: relative;
  white-space: nowrap;

  &:before {
    content: '';
    position: absolute;
    bottom: -3px; /* Adjust this value as needed */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.COLOR.common.white};
    transition: width 0.3s ease-in-out;
  }

  &[isactive='true']:before {
    width: 100%;
  }
`
export default Header
