import type { Dispatch, SetStateAction } from 'react'
import type { MenuProps } from '../../gallery.types'

export interface MenuBarProps {
  setSelectedCategory: Dispatch<SetStateAction<MenuProps>>
}
