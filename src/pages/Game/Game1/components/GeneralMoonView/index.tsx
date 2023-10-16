import type { FlagGame1Response } from '@/types'
import { FC } from 'react'
import * as S from './GeneralMoonView.styles'
import { Pointer } from './components/Pointer'
import FullMoon from '/assets/game/game1/FullMoon.png'
import StarParticle from '/assets/game/game1/WhiteStarParticle.png'
export const GeneralMoonView: FC<FlagGame1Response> = ({ moonShape }) => {
  return (
    <S.NightSky>
      <S.StarParticleImg src={StarParticle} />
      <S.MoonHalo moonShape={moonShape}>
        <S.FullMoonImg src={FullMoon} />
        <S.MoonShadow moonShape={moonShape} />
        <Pointer />
      </S.MoonHalo>
    </S.NightSky>
  )
}