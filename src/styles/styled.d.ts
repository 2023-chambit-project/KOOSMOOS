import 'styled-components'
import { ColorTypes, FontSizeTypes, MediaTypes, PaletteTypes } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    MEDIA: MediaTypes
    COLOR: ColorTypes
    PALETTE: PaletteTypes
    FONT_SIZE: FontSizeTypes
  }
}
