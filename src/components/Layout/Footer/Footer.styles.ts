import { FlexAlignCSS, FlexCenterCSS, FlexColumnCSS } from '@/styles'

import styled from 'styled-components'

export const Footer = styled.footer`
  position: absolute;
  z-index: 2;
  width: 100%;
  ${FlexCenterCSS};
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLOR.common.black};
  padding: 3rem 6rem;

  @media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
    padding: 3rem 1rem;
  }
`

export const MenuTab = styled.ul`
  ${FlexColumnCSS}
  align-items: flex-start;
  gap: 1.4rem;
  padding: 0 8rem;
  width: 100%;

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

  @media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
    width: 80%;
  }

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
  width: 30rem;
  height: auto;
  padding: 0 3rem;

  @media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
    width: 20rem;
  }
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
  width: 100%;
  justify-content: flex-start;
  padding-bottom: 1rem;
  font-family: 'PyeongChangPeace-Light';

  @media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
    width: 80%;
  }

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
