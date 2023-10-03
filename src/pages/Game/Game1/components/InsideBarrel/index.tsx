import { FC, PropsWithChildren } from 'react'
import * as S from './InsideBarrel.styles'

const InsideBarrel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <S.Barrel>
      <S.Joint>{children}</S.Joint>
    </S.Barrel>
  )
}

export default InsideBarrel
