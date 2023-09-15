import { motion } from 'framer-motion'
import type { FC } from 'react'
import * as S from './WikiCard.styles'
import type { WikiCardProps } from './WikiCard.types'

export const WikiCard: FC<WikiCardProps> = ({ postInfo }) => {
  const { title, thumbnail, description, date } = postInfo

  return (
    <motion.div whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}>
      <S.Wrapper>
        <S.Thumbnail src={thumbnail} />
        <S.Container>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.Date>{date}</S.Date>
        </S.Container>
      </S.Wrapper>
    </motion.div>
  )
}
