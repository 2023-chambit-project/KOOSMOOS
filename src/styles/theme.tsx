import { type DefaultTheme } from 'styled-components'

const MEDIA = {
  mobile: '414px',
  tablet: '820px',
  laptop: '1440px',
} as const

const COLOR = {
  common: {
    white: '#FFF',
    black: '#000',
    gray: {
      900: '#202020',
      800: '#3B3B3B',
      700: '#5C5C5C',
      600: '#797979',
      500: '#A0A0A0',
      400: '#C9C9C9',
      300: '#E5E5E5',
      200: '#EFEFEF',
      100: '#F7F7F7',
      50: '#FBFBFB',
    },
  },
  success: '#1DCB63',
  error: '#CB1D3C',
  alert: {
    100: '#DA1E28',
    70: '#99151C',
    40: '#660000',
    20: '#2C0608',
  },
} as const

const PALETTE = {
  yellow: {
    100: '#FFCA5A',
    70: '#CCA148',
    40: '#997936',
    20: '#665124',
  },
  blue: {
    100: '#1E8CFA',
    70: '#1562AF',
    40: '#0C3864',
    20: '#061C32',
  },
  purple: {
    100: '#54007B',
    70: '#7A00B3',
    40: '#460066',
    20: '#230033',
  },
  orange: {
    100: '#FF7A00',
    70: '#B35500',
    40: '#663100',
    20: '#331800',
  },
} as const

const FONT_SIZE = {
  tiny: '1.4rem',
  small: '1.8rem',
  medium: '2.0rem',
  large: '2.4rem',
  big: '3.2rem',
  huge: '4.8rem',
} as const

export type MediaTypes = typeof MEDIA
export type ColorTypes = typeof COLOR
export type PaletteTypes = typeof PALETTE
export type FontSizeTypes = typeof FONT_SIZE

const theme: DefaultTheme = {
  MEDIA,
  COLOR,
  PALETTE,
  FONT_SIZE,
} as const

export default theme
