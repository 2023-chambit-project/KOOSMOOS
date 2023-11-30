import * as S from './category.styles'

import { Dispatch, SetStateAction, useState } from 'react'

type CategoryProps = {
  setSelectedCategory: Dispatch<SetStateAction<string>>
}

const Category = ({ setSelectedCategory }: CategoryProps) => {
  const categories = ['행성', '우주', '발사체', '인공위성']
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
