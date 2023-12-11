import { FlexCenterCSS } from '@/styles'
import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100dvh;
  background-color: ${({ theme }) => theme.COLOR.common.black};
  ${FlexCenterCSS}
`

export const LoadingSection = styled.div`
  width: 40%;
`
