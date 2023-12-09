import { FlexCenterCSS } from '@/styles'
import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 70dvh;
  background-color: ${({ theme }) => theme.COLOR.common.black};
  ${FlexCenterCSS}
  flex-direction: column;
`

export const AlertSection = styled.div`
  width: 30%;
  ${FlexCenterCSS}
  flex-direction: column;
  gap: 3.5rem;
`

export const TextSection = styled.div`
  margin-top: 6rem;
  ${FlexCenterCSS}
  flex-direction: column;
  gap: 0.8rem;
`

export const AlertHeading = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  color: ${({ theme }) => theme.PALETTE.yellow[100]};
  font-weight: bold;
`

export const AlertText = styled.p`
  color: ${({ theme }) => theme.COLOR.common.gray[500]};
`

export const ReturnButton = styled.button`
  width: 100%;
  height: 4rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ theme }) => theme.PALETTE.yellow[70]};

  &:hover {
    background-color: ${({ theme }) => theme.PALETTE.yellow[100]};
    transition: background-color 0.3s ease;
  }
`
