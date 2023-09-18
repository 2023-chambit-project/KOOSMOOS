import { FlexCenterCSS, FlexColumnCSS } from '@/styles'
import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  ${FlexCenterCSS}
  gap: 5rem;
  cursor: pointer;
`

export const Thumbnail = styled.img`
  width: 26rem;
  height: auto;
`

export const Container = styled.div`
  width: 50rem;
  ${FlexColumnCSS}
`

export const Title = styled.h2`
  margin-bottom: 3rem;
  font-size: ${({ theme }) => theme.FONT_SIZE.big};
`

export const Date = styled.span`
  margin-top: auto;
`

export const Description = styled.div`
  height: 12rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;
  line-height: 1.4;
  color: ${({ theme }) => theme.COLOR.common.gray[400]};
`
