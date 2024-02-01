import type { NASAImageCoreProps } from '@/types'
import type { MenuProps } from './gallery.types'

export const CATEGORY_MAP: { [key in MenuProps]: string } = {
  행성: 'planet',
  우주: 'cosmos',
  발사체: 'space launch vehicle',
  인공위성: 'satellite',
} as const

export const NASA_IMAGE_BASE: NASAImageCoreProps = {
  data: [],
  links: [],
} as const
