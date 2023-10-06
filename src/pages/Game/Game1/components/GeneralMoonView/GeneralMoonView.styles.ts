import { FlexCenterCSS } from '@/styles'
import { css, keyframes, styled } from 'styled-components'
import type { MoonShapeProp, PosXYProp } from '../../Game1.types'

const MoonStyleCSS = {
  newMoon: {
    HaloCSS: css`
      box-shadow:
        1rem 0 1rem ${({ theme }) => theme.PALETTE.blue[100]},
        -1rem 0 1rem ${({ theme }) => theme.PALETTE.blue[100]};
    `,
    ShadowCSS: css`
      background-color: rgba(0, 0, 0, 0.6);
    `,
  },
  waxingCrescent: {
    HaloCSS: css`
      box-shadow:
        0.5rem 0 1rem ${({ theme }) => theme.PALETTE.orange[100]},
        -1rem 0 1rem ${({ theme }) => theme.PALETTE.blue[100]};
    `,
    ShadowCSS: css`
      background: radial-gradient(circle at 0% 50%, rgba(0, 0, 0, 0.6) 65%, rgba(0, 0, 0, 0) 80%);
    `,
  },
  firstQuarter: {
    HaloCSS: css`
      box-shadow:
        1rem 0 1rem ${({ theme }) => theme.PALETTE.orange[100]},
        -1rem 0 1rem ${({ theme }) => theme.PALETTE.blue[100]};
    `,
    ShadowCSS: css`
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) 49%, rgba(0, 0, 0, 0) 51%);
    `,
  },
  waxingGibbous: {
    HaloCSS: css`
      box-shadow:
        1rem 0 1rem ${({ theme }) => theme.PALETTE.orange[100]},
        -0.5rem 0 1rem ${({ theme }) => theme.PALETTE.blue[100]};
    `,
    ShadowCSS: css`
      background: radial-gradient(circle at -120% 50%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0) 75%);
    `,
  },
  fullMoon: {
    HaloCSS: css`
      box-shadow:
        1rem 0 1rem ${({ theme }) => theme.PALETTE.orange[100]},
        -1rem 0 1rem ${({ theme }) => theme.PALETTE.orange[100]};
    `,
    ShadowCSS: css``,
  },
  waningGibbous: {
    HaloCSS: css`
      box-shadow:
        0.5rem 0 1rem ${({ theme }) => theme.PALETTE.blue[100]},
        -1rem 0 1rem ${({ theme }) => theme.PALETTE.orange[100]};
    `,
    ShadowCSS: css`
      background: radial-gradient(circle at 0% 50%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.6) 85%);
    `,
  },
  thirdQuarter: {
    HaloCSS: css`
      box-shadow:
        1rem 0 1rem ${({ theme }) => theme.PALETTE.blue[100]},
        -1rem 0 1rem ${({ theme }) => theme.PALETTE.orange[100]};
    `,
    ShadowCSS: css`
      background: linear-gradient(90deg, rgba(0, 0, 0, 0) 49%, rgba(0, 0, 0, 0.6) 51%);
    `,
  },
  waningCrescent: {
    HaloCSS: css`
      box-shadow:
        1rem 0 1rem ${({ theme }) => theme.PALETTE.blue[100]},
        -0.5rem 0 1rem ${({ theme }) => theme.PALETTE.orange[100]};
    `,
    ShadowCSS: css`
      background: radial-gradient(circle at 120% 50%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0) 90%);
    `,
  },
}

export const NightSky = styled.div`
  position: relative;
  height: 88vh;
  width: 100%;
  ${FlexCenterCSS};
  background-image: linear-gradient(
    50deg,
    ${({ theme }) => theme.PALETTE.blue[40]},
    ${({ theme }) => theme.PALETTE.purple[70]}
  );
`
export const StarParticleImg = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
`
export const FullMoonImg = styled.img`
  position: absolute;
  width: 100%;
`

export const MoonShadow = styled.div<MoonShapeProp>`
  position: absolute;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 100rem;
  ${({ moonShape }) => MoonStyleCSS[moonShape].ShadowCSS}
`

export const MoonHalo = styled.div<MoonShapeProp>`
  position: relative;
  width: 30%;
  aspect-ratio: 1/1;
  border-radius: 100rem;
  ${({ moonShape }) => MoonStyleCSS[moonShape].HaloCSS}
`

const pointer = keyframes`
  0% {
    transform: translate(-50%, -200%);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -120%);
    opacity: 1;
  }
`

export const Point = styled.div<PosXYProp>`
  position: absolute;
  top: ${({ posY }) => ((-posY + 90) / 180) * 100}%;
  left: ${({ posX }) => ((posX + 90) / 180) * 100}%;
  width: 10%;
  aspect-ratio: 1/1;
  border-radius: 100rem;
  background-color: ${({ theme }) => theme.PALETTE.orange[100]};
  border: 0.2rem solid ${({ theme }) => theme.COLOR.common.white};
  ${FlexCenterCSS}
  color: white;
  &::before {
    content: '';
    position: absolute;
    top: 100%;
    border: 0.6rem solid transparent;
    border-top: 1rem solid ${({ theme }) => theme.COLOR.common.white};
  }
  animation: ${pointer} 0.2s ease-in forwards;
`
