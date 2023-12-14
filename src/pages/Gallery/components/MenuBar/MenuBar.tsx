import * as S from './MenuBar.styles'

import type { MenuProps } from '../../gallery.types'
import type { MenuBarProps } from './MenuBar.types'

export const MenuBar = ({ selectedCategory, setSelectedCategory }: MenuBarProps) => {
  const categories: MenuProps[] = ['행성', '우주', '발사체', '인공위성']

  return (
    <S.CategoriesList>
      <ul>
        {categories.map((item) => (
          <S.CategoryItem
            key={item}
            active={selectedCategory === item}
            onClick={() => {
              setSelectedCategory(item)
            }}
          >
            {item}
          </S.CategoryItem>
        ))}
      </ul>
    </S.CategoriesList>
  )
}
