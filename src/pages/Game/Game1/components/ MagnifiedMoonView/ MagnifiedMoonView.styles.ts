import { FlexAlignCSS, FlexCenterCSS } from '@/styles'
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
  background-color: rgb(253, 172, 03);
  border-radius: 100rem;

  &:hover {
    button {
      position: absolute;
      top: 45%;
      z-index: 1;
      display: block;
      padding: 8px 6px;
    }
  }

  button {
    display: none;
    cursor: pointer;
  }
`
// Carousel -> GreetingList
export const GreetingList = styled.ul`
  ${FlexAlignCSS}
  width: 100%;
  aspect-ratio: 1/1;
  transition: all 0.5s ease-in-out;
`

//GreetingItem
export const GreetingItem = styled.li`
  flex: none;
  ${FlexCenterCSS}
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 5rem;
`
