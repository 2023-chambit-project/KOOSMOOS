import { FlexCenterCSS } from '@/styles'
import { styled } from 'styled-components'

export const GameWrapper = styled.div`
  width: 100%;
  height: 90vh;
  ${FlexCenterCSS}
  background-color: ${({ theme }) => theme.COLOR.common.black};
  position: relative;
`

export const GameWindow = styled.div`
  width: 50rem;
  height: 100%;

  position: relative;
  overflow: hidden;

  ${FlexCenterCSS}
`
export const StageWrapper = styled.div`
  width: 100%;
  height: fit-content;

  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  transition: transform 2s linear;
`

export const AbsoluteLoading = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLOR.common.black};
  position: absolute;
  z-index: 1;
`
