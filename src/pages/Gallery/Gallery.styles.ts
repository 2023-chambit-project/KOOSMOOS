import { FlexCenterCSS } from '@/styles'
import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.COLOR.common.black};
  color: ${({ theme }) => theme.COLOR.common.white};
  padding: 50px 0 150px;
`

export const Container = styled.section`
  &::before {
    content: '';
    width: 100%;
    height: 100vh;
    display: block;
    background: url('assets/bg/PaleBlueDot.png') no-repeat center/100% 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  ${FlexCenterCSS}
`

export const ModalContent = styled.div`
  position: relative;
  padding: 40px 10px 10px;
  background-color: ${({ theme }) => theme.COLOR.common.white};
  border-radius: 8px;
`

export const CloseIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`

export const ModalImage = styled.img`
  max-width: 500px;
  height: 100%;
`
