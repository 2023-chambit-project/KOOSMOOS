import { FlexCenterCSS } from '@/styles'
import { styled } from 'styled-components'

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 8vh;
  right: 12vw;

  width: 7rem;
  height: 7rem;
  ${FlexCenterCSS}
  align-items: end;
`
export const ButtonBody = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLOR.alert[100]};
  border-radius: 10rem;
  box-shadow: 0 0.9rem 0.1px ${({ theme }) => theme.COLOR.alert[40]};
  ${FlexCenterCSS}
  text-align: center;
  color: ${({ theme }) => theme.COLOR.common.gray[900]};
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  &:active {
    transform: translateY(5%);
    box-shadow: 0 0.45rem 0.1px ${({ theme }) => theme.COLOR.alert[40]};
  }
`
