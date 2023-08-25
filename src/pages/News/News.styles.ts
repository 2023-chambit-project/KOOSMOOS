import { ColumnNumberCSS } from '@/styles'
import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  min-height: 1742px;
  background-color: ${({ theme }) => theme.COLOR.common.black};
  color: ${({ theme }) => theme.COLOR.common.white};
`

export const StarBg = styled.div`
  display: block;
  width: 100%;
  height: 1742px;
  background-position-x: 0px;
  background: url('assets/bg/space-bg.png') no-repeat 50% 50% / cover;
  background-repeat: repeat-y;
  position: fixed;
  top: 0;
  left: 0;
  transition: background-position 0.5s ease-out;
  margin-bottom: 3rem;
`

export const Container = styled.section`
  &::before {
    content: '';
    width: 100%;
    height: 100vh;
    display: block;
    background: url('assets/bg/purple_bg.png') no-repeat center/100% 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
`

export const ContentContainer = styled.section`
  ${ColumnNumberCSS(2)};
  padding-bottom: 0 5rem 10rem;
  row-gap: 20rem;
`
