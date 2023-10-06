import { curFlagIndexAtom } from '@/atoms/curFlagIndex.atom'
import type { FlagGame1Response } from '@/types'
import { FC } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './GeneralMoonView.styles'
import FullMoon from '/assets/game/game1/FullMoon.png'
import StarParticle from '/assets/game/game1/WhiteStarParticle.png'
export const GeneralMoonView: FC<FlagGame1Response> = ({ moonShape, flagList }) => {
  const [curFlagIndex] = useRecoilState<number>(curFlagIndexAtom)
  return (
    <S.NightSky>
      <S.StarParticleImg src={StarParticle} />
      <S.MoonHalo moonShape={moonShape}>
        <S.FullMoonImg src={FullMoon} />
        <S.MoonShadow moonShape={moonShape} />
        <S.Point key={curFlagIndex} posX={flagList[curFlagIndex].posX} posY={flagList[curFlagIndex].posY}>
          {flagList[curFlagIndex].writer[0]}
        </S.Point>
      </S.MoonHalo>
    </S.NightSky>
  )
}
