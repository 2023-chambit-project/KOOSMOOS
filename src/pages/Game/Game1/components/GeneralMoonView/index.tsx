import SpaceRock from '@/assets/lottie/space_rock.json'
import { moonShapeAtom } from '@/atoms/moonShape.atom'
import { useLoading } from '@/hooks'
import { theme } from '@/styles'
import type { MoonProp } from '@/types'
import { useRecoilValue } from 'recoil'
import { LoadingPage } from '..'
import * as S from './GeneralMoonView.styles'
import { Pointer } from './components/Pointer'
import FullMoon from '/assets/game/game1/FullMoon.png'
import StarParticle from '/assets/game/game1/WhiteStarParticle.png'

export const GeneralMoonView = () => {
  const { loading } = useLoading(3500)
  const moonShape = useRecoilValue<MoonProp>(moonShapeAtom)

  return (
    <>
      {loading && (
        <LoadingPage
          lottieAnimation={SpaceRock}
          text="달 보러 가는 중.."
          bgColor={theme.COLOR.common.gray[800]}
          circleColor={theme.COLOR.common.gray[700]}
          textColor={theme.COLOR.common.white}
        />
      )}
      {!loading && (
        <S.NightSky>
          <S.StarParticleImg src={StarParticle} />
          <S.MoonHalo {...{ moonShape }}>
            <S.FullMoonImg src={FullMoon} />
            <S.MoonShadow {...{ moonShape }} />
            <Pointer />
          </S.MoonHalo>
        </S.NightSky>
      )}
    </>
  )
}
