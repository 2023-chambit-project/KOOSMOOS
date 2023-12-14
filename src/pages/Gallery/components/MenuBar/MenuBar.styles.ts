import { FlexCenterCSS } from '@/styles'
import styled from 'styled-components'

export const CategoriesList = styled.ul`
  & > ul {
    width: 50%;
    flex-wrap: nowrap;
    ${FlexCenterCSS}
    justify-content: space-between;
    border: 1px solid white;
    margin: 0 auto 100px;
  }
  .active {
    background-color: white;
    color: black;
  }
`

export const CategoryItem = styled.li<{ active: boolean }>`
  cursor: pointer;
  width: 100%;
  height: 50px;
  font-size: 20px;
  ${FlexCenterCSS}
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  color: ${({ active }) => (active ? 'black' : 'white')};
  transition: background-color 0.2s;
`
