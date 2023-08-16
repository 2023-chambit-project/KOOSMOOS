import { FlexBetweenCSS } from '@/styles'
import { css, styled } from 'styled-components'

// 헤더 영역
export const HeaderContainer = styled.header`
  width: 100%;
  ${FlexBetweenCSS};
  padding: 1rem 2.5rem;
  position: sticky;
  top: 0%;
  color: ${({ theme }) => theme.COLOR.common.white};
  background-color: ${({ theme }) => theme.COLOR.common.black};
  z-index: 2;
`

// Logo 와 NavBar 를 감싼 영역
export const LogoAndNavWrapper = styled.div`
  ${FlexBetweenCSS};
  width: 65%;
  @media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
    // mobile 화면에서 해당 영역은 세로 정렬
    flex-direction: column;
    align-items: start;
    width: 80%;
  }
`
// Logo Image
export const LogoIMG = styled.img`
  height: 4.8rem;
  width: 24rem;
`
// 네비게이션 목록 전시
export const NavList = styled.ul`
  ${FlexBetweenCSS}
  margin: 1.5rem 0 0 5rem;
  gap: 5rem;
  @media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
    margin: 1.5rem 0 1rem 0;
  }
`
// 네비게이션 목록 개별
export const NavItem = styled.li<{ $isActive: boolean }>`
  /* ... */
  position: relative;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.COLOR.common.white};
    transition: width 0.3s ease-in-out;
    font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
  }

  ${(props) =>
    props.$isActive &&
    css`
      &:before {
        width: 100%;
      }
    `}
`
