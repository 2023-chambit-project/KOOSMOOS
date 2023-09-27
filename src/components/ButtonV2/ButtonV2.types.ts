import { roundCSS, sizeCSS, skinCSS, variantCSS } from './ButtonV2.styles'

export interface StyleProps {
  variant?: keyof typeof variantCSS
  size?: keyof typeof sizeCSS
  round?: keyof typeof roundCSS
  skin?: keyof typeof skinCSS
  bgColor?: string
}
