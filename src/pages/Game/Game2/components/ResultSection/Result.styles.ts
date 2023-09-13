import { FlexCenterCSS, FlexColumnCSS } from '@/styles'
import styled from 'styled-components'

export const Container = styled.section`
  width: 40%;
  margin: -5rem 0;
  ${FlexCenterCSS}
  flex-direction: column;
  @media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
    width: 90%;
    margin: -13rem 0;
  }
`

export const Main = styled.main`
  width: 100%;
  ${FlexCenterCSS}
  flex-direction: column;
  @media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
    width: 100%;
  }
`

export const ButtonWrap = styled.div`
  width: 100%;
  ${FlexColumnCSS}
  gap: 2rem;
  margin-top: 5rem;
`

export const Button = styled.button<{ color: 'purple' | 'gray' }>`
  width: 100%;
  height: 5rem;
  border-radius: 100px;
  color: ${({ theme }) => theme.COLOR.common.white};
  background-color: ${({ theme, color }) =>
    color === 'purple' ? `${theme.PALETTE.purple[70]}` : `${theme.COLOR.common.gray[800]}`};
  font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, color }) =>
      color === 'purple' ? `${theme.PALETTE.purple[50]}` : `${theme.COLOR.common.gray[700]}`};
    transition: background-color 0.3s ease;
  }
`

export const ResultImg = styled.img`
  width: 48rem;
  height: auto;
`

export const Copy = styled.span`
  color: ${({ theme }) => theme.COLOR.common.gray[500]};
  border-bottom: 1px solid ${({ theme }) => theme.COLOR.common.gray[500]};
  cursor: pointer;
  font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
  margin-top: 3rem;

  &:hover {
    color: ${({ theme }) => theme.COLOR.common.gray[400]};
    border-bottom: 1px solid ${({ theme }) => theme.COLOR.common.gray[400]};
    transition: color 0.3s ease;
  }
`
