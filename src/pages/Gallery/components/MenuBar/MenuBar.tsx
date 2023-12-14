import * as S from './MenuBar.styles'

import { useState } from 'react'
import type { MenuProps } from '../../gallery.types'
import type { MenuBarProps } from './MenuBar.types'

export const MenuBar = ({ setSelectedCategory }: MenuBarProps) => {
  const categories: MenuProps[] = ['행성', '우주', '발사체', '인공위성']
  const [activeCategory, setActiveCategory] = useState('')

  return (
    <S.CategoriesList className="categories-container">
      <ul className="categories">
        {categories.map((item) => (
          <S.CategoryItem
            key={item}
            active={activeCategory === item}
            onClick={() => {
              setSelectedCategory(item)
              setActiveCategory(item)
            }}
            className="categories__li"
          >
            {item}
          </S.CategoryItem>
        ))}
      </ul>
    </S.CategoriesList>
  )
}
