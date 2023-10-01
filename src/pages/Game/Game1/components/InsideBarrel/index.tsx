import { FC, PropsWithChildren } from 'react'
import * as S from './InsideBarrel.styles'

const InsideBarrel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <S.Barrel>
        <S.Joint size="100rem" width="2.5px">
          {children}
        </S.Joint>
      </S.Barrel>
    </>
  )
}

export default InsideBarrel
