import * as S from './category.styles'

import React, { useState } from 'react'

type CategoryProps = {
  setSelectedCategory: (category: string) => void
}

const Category: React.FC<CategoryProps> = ({ setSelectedCategory }) => {
  const categories = ['행성', '우주', '발사체', '인공위성']
  const [activeCategory, setActiveCategory] = useState('')

  return (
    <S.CategoriesList className="categories-container">
      <ul className="categories">
        {categories.map((item, i) => (
          <S.CategoryItem
            key={i}
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
