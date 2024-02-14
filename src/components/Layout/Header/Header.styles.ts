import { FlexBetweenCSS } from '@/styles'
import { css, styled } from 'styled-components'

// 헤더 영역
export const HeaderWrapper = styled.header`
  width: 100%;
  ${FlexBetweenCSS};
  padding: 1rem 2.5rem;
  position: sticky;
  top: 0%;
  color: ${({ theme }) => theme.COLOR.common.white};
  background-color: ${({ theme }) => theme.COLOR.common.black};
  z-index: 3;

  @media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 2rem;
  }
`

export const ContentSection = styled.section`
  width: 65%;
  ${FlexBetweenCSS};

  @media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
    width: 100%;
  }
`

// Logo Image
export const LogoIMG = styled.img`
  width: 24rem;
  height: 4.8rem;
  cursor: pointer;
`

// 네비게이션 목록 전시
export const NavList = styled.ul`
  ${FlexBetweenCSS}
  width: 47rem;
  height: 3rem;

  @media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
    width: 35rem;
  }
`

// 네비게이션 목록 개별
export const NavItem = styled.li<{ $isActive: boolean }>`
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
