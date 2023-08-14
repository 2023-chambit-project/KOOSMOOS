import { variantCSS } from './Box.styles'

export interface StyleProps {
  variant?: keyof typeof variantCSS
  bgColor: string
  width?: string
  height?: string
}
