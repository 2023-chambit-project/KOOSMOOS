import { type DefaultTheme } from 'styled-components'

import { COLOR } from './color'
import { FONT_SIZE } from './font.size'
import { MEDIA } from './media'
import { PALETTE } from './palette'

export type MediaTypes = typeof MEDIA
export type ColorTypes = typeof COLOR
export type PaletteTypes = typeof PALETTE
export type FontSizeTypes = typeof FONT_SIZE

export const theme: DefaultTheme = {
  MEDIA,
  COLOR,
  PALETTE,
  FONT_SIZE,
} as const
