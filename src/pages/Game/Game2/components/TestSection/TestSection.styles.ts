import { FlexCenterCSS } from '@/styles'
import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  padding: 12rem 0 24rem;
`

export const ContentSection = styled.article<{ isThisPage: boolean }>`
  display: ${({ isThisPage }) => (isThisPage ? 'flex' : 'none')};
  width: 40%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  margin: 8rem 0;
  text-align: center;
  line-height: 1.5;
  width: 100%;
  height: 5rem;
`

export const AnswerContainer = styled.div`
  width: 100%;
  ${FlexCenterCSS}
  flex-direction: column;
  gap: 2rem;
`

export const AnswerBox = styled.div`
  width: 100%;
  height: 10rem;
  border-radius: 8px;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.COLOR.common.gray[100]};
  ${FlexCenterCSS}
  color: ${({ theme }) => theme.COLOR.common.black};
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  line-height: 1.5;

  &:hover {
    background-color: ${({ theme }) => theme.PALETTE.purple[20]};
    transition: background-color 0.5s ease;
  }
`
