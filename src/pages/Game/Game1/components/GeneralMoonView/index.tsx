import { FC } from 'react'
import type { MoonShapeProp } from '../../Game1.types'
import * as S from './GeneralMoonView.styles'
import FullMoon from '/public/assets/game/game1/FullMoon.png'
import StarParticle from '/public/assets/game/game1/WhiteStarParticle.png'
const GeneralMoonView: FC<MoonShapeProp> = ({ moonShape }) => {
  return (
    <S.NightSky>
      <S.StarParticleImg src={StarParticle} />
      <S.MoonHalo moonShape={moonShape}>
        <S.FullMoonImg src={FullMoon} />
        <S.MoonShadow moonShape={moonShape} />
      </S.MoonHalo>
    </S.NightSky>
  )
}

export default GeneralMoonView
