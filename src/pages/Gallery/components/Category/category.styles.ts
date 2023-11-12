import styled from 'styled-components'

export const CategoriesList = styled.ul`
  .categories {
    width: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    border: 1px solid white;
    margin: 0 auto 100px;

    &__li {
      cursor: pointer;
      padding: 12px 32px;
    }
  }
  .active {
    background-color: white;
    color: black;
  }
`

export const CategoryItem = styled.li<{ active: boolean }>`
  cursor: pointer;
  font-size: 20px;
  padding: 12px 32px;
  background-color: ${(props) => (props.active ? 'white' : 'transparent')};
  color: ${(props) => (props.active ? 'black' : 'white')};
  transition: background-color 0.2s;
`
