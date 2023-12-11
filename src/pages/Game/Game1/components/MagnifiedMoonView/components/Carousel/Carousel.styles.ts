import { FlexAlignCSS, FlexCenterCSS } from "@/styles"
import { styled } from "styled-components"

export const GreetingList = styled.ul`
  ${FlexAlignCSS}
  width: 100%;
  aspect-ratio: 1/1;
  transition: all 0.5s ease-in-out;
`

export const GreetingItem = styled.li`
  flex: none;
  ${FlexCenterCSS}
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 5rem;
`
