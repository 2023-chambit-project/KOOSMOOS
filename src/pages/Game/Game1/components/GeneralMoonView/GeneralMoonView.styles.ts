import { FlexCenterCSS } from '@/styles'
import { css, styled } from 'styled-components'
import type { MoonShapeProp } from '../../Game1.types'

const MoonStyleCSS = {
  newMoon: {
    HaloCSS: css`
      box-shadow:
        1rem 0 1rem ${({ theme }) => theme.PALETTE.blue[100]},
        -1rem 0 1rem ${({ theme }) => theme.PALETTE.blue[100]};
    `,
    ShadowCSS: css`
      background-color: rgba(0, 0, 0, 0.8);
    `,
  },
  waxingCrescent: {
    HaloCSS: css`
      box-shadow:
        0.5rem 0 1rem ${({ theme }) => theme.PALETTE.orange[100]},
        -1rem 0 1rem ${({ theme }) => theme.PALETTE.blue[100]};
    `,
    ShadowCSS: css`
      background: radial-gradient(circle at -45% 50%, rgba(0, 0, 0, 0.8) 82%, rgba(0, 0, 0, 0) 90%);
    `,
  },
  firstQuarter: {
    HaloCSS: css`
      box-shadow:
        1rem 0 1rem ${({ theme }) => theme.PALETTE.orange[100]},
        -1rem 0 1rem ${({ theme }) => theme.PALETTE.blue[100]};
    `,
    ShadowCSS: css`
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.8) 49%, rgba(0, 0, 0, 0) 51%);
    `,
  },
  waxingGibbous: {
    HaloCSS: css`
      box-shadow:
        1rem 0 1rem ${({ theme }) => theme.PALETTE.orange[100]},
        -0.5rem 0 1rem ${({ theme }) => theme.PALETTE.blue[100]};
    `,
    ShadowCSS: css`
      background: radial-gradient(circle at -45% 50%, rgba(0, 0, 0, 0.8) 38%, rgba(0, 0, 0, 0) 50%);
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
      background: radial-gradient(circle at 0% 50%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 80%);
    `,
  },
  thirdQuarter: {
    HaloCSS: css`
      box-shadow:
        1rem 0 1rem ${({ theme }) => theme.PALETTE.blue[100]},
        -1rem 0 1rem ${({ theme }) => theme.PALETTE.orange[100]};
    `,
    ShadowCSS: css`
      background: linear-gradient(90deg, rgba(0, 0, 0, 0) 49%, rgba(0, 0, 0, 0.8) 51%);
    `,
  },
  waningCrescent: {
    HaloCSS: css`
      box-shadow:
        1rem 0 1rem ${({ theme }) => theme.PALETTE.blue[100]},
        -0.5rem 0 1rem ${({ theme }) => theme.PALETTE.orange[100]};
    `,
    ShadowCSS: css`
      background: radial-gradient(circle at 120% 50%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 0) 90%);
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
