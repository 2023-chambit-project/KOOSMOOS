import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  min-height: 1742px;
  background-position-x: 0px;
  background-repeat: repeat-y;
  background-color: ${({ theme }) => theme.COLOR.common.black};
  color: ${({ theme }) => theme.COLOR.common.white};
  padding-top: 50px;
`

export const StarBg = styled.div`
  display: block;
  width: 100%;
  height: 1742px;
  background-position-x: 0px;
  background: url('assets/bg/PaleBlueDot.png') no-repeat 50% 50% / cover;
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
    background: url('assets/bg/PaleBlueDot.png') no-repeat center/100% 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
`

export const TopButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  padding: 10px;
  background: white;
  border-radius: 8px;
`
