import { contentSizeCSS, sizeCSS, variantCSS } from './Button.styles'

export interface StyleProps {
  variant?: keyof typeof variantCSS
  size?: keyof typeof sizeCSS
  contentSize?: keyof typeof contentSizeCSS
}
