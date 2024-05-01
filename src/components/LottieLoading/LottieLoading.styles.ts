import { FlexCenterCSS, theme } from '@/styles'
import { styled } from 'styled-components'

export const Title = styled.h1`
  font-weight: 800;
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  margin-bottom: 2rem;
`

export const LottieWrapper = styled.div<{ $wrapperColor?: string }>`
  width: 20rem;
  height: 20rem;
  border-radius: 2rem;
  background-color: ${({ $wrapperColor = theme.COLOR.common.black }) => $wrapperColor};
`

export const Container = styled.section<{
  $bgColor?: string
  $color?: string
}>`
  width: 100%;
  height: 100%;
  ${FlexCenterCSS}
  flex-direction: column;
  padding: 22rem 0;
  background-color: ${({ $bgColor = theme.COLOR.common.black }) => $bgColor};
  color: ${({ $color = theme.COLOR.common.white }) => $color};
`
