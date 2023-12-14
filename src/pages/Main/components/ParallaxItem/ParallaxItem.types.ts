import type { ParallaxLayerProps } from '@react-spring/parallax'

export interface ParallaxItemProps extends ParallaxLayerProps {
  align?: 'center' | 'start' | 'end'
}
