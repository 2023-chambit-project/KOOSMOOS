import type { Dispatch, SetStateAction } from 'react'
import type { MenuProps } from '../../gallery.types'

export interface MenuBarProps {
  selectedCategory: MenuProps
  setSelectedCategory: Dispatch<SetStateAction<MenuProps>>
}
