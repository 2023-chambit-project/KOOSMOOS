import { FlexCenterCSS } from '@/styles'
import { styled } from 'styled-components'

// Container -> LunaSurface
export const LunaSurface = styled.div`
  ${FlexCenterCSS}
  width: 50rem;
  height: 50rem;
`

// CarouselWrapper -> YellowBase
export const YellowBase = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 10%;
  background-color: rgb(253, 172, 03);

  &:hover {
    button {
      position: absolute;
      top: 45%;
      z-index: 1;
      display: block;
      padding: 8px 6px;
      border-radius: 10px;
    }
  }

  button {
    display: none;
  }

  .leftButton {
    left: 0;
  }

  .rightButton {
    right: 0;
  }
`
// Carousel -> GreetingList
export const GreetingList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease-in-out;
  overflow: hidden;
`

//GreetingItem
export const GreetingItem = styled.li`
  ${FlexCenterCSS}
  width: 100%;
  height: 100%;
  padding: 10px 0 15px;
  border-radius: 100rem;
  position: relative;
`
