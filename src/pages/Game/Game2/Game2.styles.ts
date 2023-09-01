import { FlexCenterCSS } from '@/styles'
import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.COLOR.common.black};
  color: ${({ theme }) => theme.COLOR.common.white};
  font-family: 'GwangyangSunshine-Bold';
`

export const Container = styled.section`
  width: 30%;
  margin: 0 auto;
  padding-top: 10rem;
  ${FlexCenterCSS}
  flex-direction: column;
  padding-bottom: 13rem;

  @media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
    width: 90%;
    padding: 14rem 0 28rem;
  }
`

export const explainText = styled.p`
  color: ${({ theme }) => theme.COLOR.common.gray[400]};
  margin-bottom: 5rem;
`

export const Title = styled.h1`
  letter-spacing: 2px;
  text-align: center;
  font-weight: 900;
  margin-bottom: 5rem;
`

export const PointText = styled.span`
  color: ${({ theme }) => theme.PALETTE.purple[40]};
  font-weight: 900;
  font-size: ${({ theme }) => theme.FONT_SIZE.huge};
`

export const AnimationBox = styled.div`
  width: 20rem;
  height: 20rem;
  margin-bottom: 5rem;
`

export const Button = styled.button`
  width: 100%;
  height: 5rem;
  border-radius: 100px;
  color: ${({ theme }) => theme.COLOR.common.white};
  background-color: ${({ theme }) => theme.PALETTE.purple[70]};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.PALETTE.purple[50]};
    transition: background-color 0.3s ease;
  }

  @media screen and (max-width: ${({ theme }) => theme.MEDIA.tablet}) {
    width: 90%;
  }
`
