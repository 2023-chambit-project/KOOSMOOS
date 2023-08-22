import { FlexAlignCSS, FlexColumnCSS } from '@/styles'

import styled from 'styled-components'

export const Footer = styled.footer`
  position: absolute;
  z-index: 4;
  width: 100%;
  height: 30rem;
  background-color: ${({ theme }) => theme.COLOR.common.black};
  padding: 3rem 6rem;
`

export const MenuTab = styled.ul`
  ${FlexColumnCSS}
  gap: 1.4rem;
  padding: 0 3rem;
  width: fit-content;

  & > li {
    color: ${({ theme }) => theme.COLOR.common.white};
    font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
    cursor: pointer;
  }
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.COLOR.common.white};
  margin: 2rem 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -7px;
    left: -6px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLOR.common.white};
  }

  &::after {
    content: '';
    position: absolute;
    top: -7px;
    right: -6px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLOR.common.white};
  }
`

export const Logo = styled.img`
  max-width: 30rem;
  height: auto;
  padding: 0 3rem;
`

export const IconMap = styled.section`
  position: absolute;
  top: -39px;
  right: 21px;

  & > svg {
    cursor: pointer;
  }
`

export const BottomTab = styled.section`
  ${FlexAlignCSS}

  & > * {
    color: ${({ theme }) => theme.COLOR.common.white};
  }

  & > div {
    ${FlexColumnCSS}
    gap: 0.3rem;
  }

  & > div > p {
    font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
  }
`
