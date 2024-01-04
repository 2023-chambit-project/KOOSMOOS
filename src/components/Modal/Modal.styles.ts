import { FlexCenterCSS, FlexColumnCSS } from '@/styles'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;
  z-index: 1000000001;

  ${FlexCenterCSS}

  background-color: #00000099;
  color: ${({ theme }) => theme.COLOR.common.white};
`
export const ContentCard = styled.div`
  width: 40%;
  height: 50%;
  max-height: 60%;

  ${FlexCenterCSS}
  ${FlexColumnCSS}

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLOR.common.gray[900]};

  padding: 10px;
`
export const ModalBody = styled.section`
  width: 100%;
  min-height: 40%;
  max-height: 60%;

  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  font-family: 'GwangyangSunshine-Light';

  overflow-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const ModalFooter = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
`
