import * as S from './category.styles'

import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'
import { MenuProps } from '../../gallery.types'

interface CategoryProps {
  setSelectedCategory: Dispatch<SetStateAction<MenuProps>>
}

const Category = ({ setSelectedCategory }: CategoryProps) => {
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

export default Category
