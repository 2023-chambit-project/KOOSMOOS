import { ParallaxLayer } from '@react-spring/parallax'
import type { PropsWithChildren } from 'react'
import * as S from '../../section/Section.styles'
import type { ParallaxItemProps } from './ParallaxItem.types'

export const ParallaxItem = ({ align = 'center', children, ...props }: PropsWithChildren<ParallaxItemProps>) => {
  return (
    <ParallaxLayer {...props}>
      <S.ItemContainer align={align}>{children}</S.ItemContainer>
    </ParallaxLayer>
  )
}
