import SpaceRock from '@/assets/lottie/space_rock.json'
import { useLoading } from '@/hooks'
import { useGetGame1Flags } from '@/services'
import { theme } from '@/styles'
import { LoadingPage } from '..'
import * as S from './GeneralMoonView.styles'
import { Pointer } from './components/Pointer'
import FullMoon from '/assets/game/game1/FullMoon.png'
import StarParticle from '/assets/game/game1/WhiteStarParticle.png'

export const GeneralMoonView = () => {
  const { data } = useGetGame1Flags()
  const { loading } = useLoading(3500)

  return (
    <>
      {loading && (
        <LoadingPage
          lottieAnimation={SpaceRock}
          text="달 보러 가는 중.."
          $bgColor={theme.COLOR.common.gray[800]}
          $circleColor={theme.COLOR.common.gray[700]}
          $textColor={theme.COLOR.common.white}
        />
      )}
      {!loading && (
        <S.NightSky>
          <S.StarParticleImg src={StarParticle} />
          <S.MoonHalo moonShape={data!.moonShape}>
            <S.FullMoonImg src={FullMoon} />
            <S.MoonShadow moonShape={data!.moonShape!} />
            <Pointer />
          </S.MoonHalo>
        </S.NightSky>
      )}
    </>
  )
}
