import { roundCSS, sizeCSS, skinCSS, variantCSS } from './Button.styles'

export interface StyleProps {
  variant?: keyof typeof variantCSS
  size?: keyof typeof sizeCSS
  round?: keyof typeof roundCSS
  skin?: keyof typeof skinCSS
  bgColor?: string
}
