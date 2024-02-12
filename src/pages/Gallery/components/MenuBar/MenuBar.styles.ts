import { FlexCenterCSS } from '@/styles'
import styled from 'styled-components'

export const MenuContainer = styled.ul`
  margin: 0 auto 10rem;
  width: fit-content;
  border-radius: 99px;
  background-color: rgb(33, 37, 41);
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLOR.common.gray[500]};
  position: relative;
`

export const Highlight = styled.div<{ index: number }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ index }) => `${index * 150 + 10}px`};
  width: 130px;
  height: 75%;
  background-color: ${({ theme }) => theme.COLOR.common.white};
  border-radius: 99px;
  transition: all 0.2s ease-in-out;
`

export const Menu = styled.li<{ selected?: boolean }>`
  ${FlexCenterCSS};
  width: 150px;
  height: 6rem;
  font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
  color: ${({ theme, selected = false }) => (selected ? theme.COLOR.common.black : theme.COLOR.common.gray[500])};
  cursor: pointer;
  z-index: 2;
  transition: color 0.2s ease-in-out;
`
