import * as S from './MenuBar.styles'

import type { MenuProps } from '../../gallery.types'
import type { MenuBarProps } from './MenuBar.types'

export const MenuBar = ({ selectedCategory, setSelectedCategory }: MenuBarProps) => {
  const categories: MenuProps[] = ['행성', '우주', '발사체', '인공위성']
  const selectedIndex = categories.findIndex((category) => category === selectedCategory)

  return (
    <S.MenuContainer>
      <S.Highlight index={selectedIndex} />
      {categories.map((item) => (
        <S.Menu key={item} selected={selectedCategory === item} onClick={() => setSelectedCategory(item)}>
          {item}
        </S.Menu>
      ))}
    </S.MenuContainer>
  )
}
