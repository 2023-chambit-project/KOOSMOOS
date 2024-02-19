import type { StageProps } from '@/pages/Game/Game1/Game1.types'
import { COLOR, PALETTE } from '@/styles'
import AsteroidBelt from '/assets/game/game1/stageSymbol/AsteroidBelt.webp'
import BlackHole from '/assets/game/game1/stageSymbol/BlackHole.webp'
import Jupiter from '/assets/game/game1/stageSymbol/Jupiter.webp'
import LaunchBase from '/assets/game/game1/stageSymbol/LaunchBase.webp'
import Mars from '/assets/game/game1/stageSymbol/Mars.webp'
import Moon from '/assets/game/game1/stageSymbol/Moon.webp'
import Neptune from '/assets/game/game1/stageSymbol/Neptune.webp'
import Saturn from '/assets/game/game1/stageSymbol/Saturn.webp'
import Uranus from '/assets/game/game1/stageSymbol/Uranus.webp'

export const TOTAL_STAGE = 9 as const
export const MINIMUM_CLICK_CYCLE = 263 as const
export const UNIT_FLIGHT_DISTANCE = 0.25 as const
export const UNIT_FLIGHT_TIME = 1327 as const
export const STAGE_INFOS: StageProps[] = [
  {
    stageName: 'KOOSMOOS 우주센터',
    distanceFromEarth: '0 (KM)',
    stageBgColors: ['#00394B', '#1E8CFA'],
    planetImageSrc: LaunchBase,
    imageAlign: 'bottom',
    planetThemeColor: PALETTE.blue[100],
    isImgAnimating: false,
  },
  {
    stageName: '달',
    distanceFromEarth: '384,000 (KM)',
    stageBgColors: ['#001929', '#00394B'],
    planetImageSrc: Moon,
    imageAlign: 'left',
    planetThemeColor: PALETTE.yellow[100],
    isImgAnimating: true,
  },
  {
    stageName: '화성',
    distanceFromEarth: '225,000,000 (KM)',
    stageBgColors: ['#251605', '#001929'],
    planetImageSrc: Mars,
    imageAlign: 'right',
    planetThemeColor: PALETTE.orange[100],
    isImgAnimating: true,
  },
  {
    stageName: '소행성대',
    distanceFromEarth: '329,000,000 (KM)',
    stageBgColors: ['#230B03', '#251605'],
    planetImageSrc: AsteroidBelt,
    imageAlign: 'center',
    planetThemeColor: PALETTE.purple[70],
    isImgAnimating: true,
  },
  {
    stageName: '목성',
    distanceFromEarth: '778,000,000 (KM)',
    stageBgColors: ['#130323', '#230B03'],
    planetImageSrc: Jupiter,
    imageAlign: 'right',
    planetThemeColor: PALETTE.orange[70],
    isImgAnimating: true,
  },
  {
    stageName: '토성',
    distanceFromEarth: '1,426,000,000 (KM)',
    stageBgColors: ['#181634', '#130323'],
    planetImageSrc: Saturn,
    imageAlign: 'left',
    planetThemeColor: PALETTE.yellow[70],
    isImgAnimating: true,
  },
  {
    stageName: '천왕성',
    distanceFromEarth: '2,870,400,000 (KM)',
    stageBgColors: ['#1D2429', '#181634'],
    planetImageSrc: Uranus,
    imageAlign: 'right',
    planetThemeColor: PALETTE.purple[50],
    isImgAnimating: true,
  },
  {
    stageName: '해왕성',
    distanceFromEarth: '4,498,300,000 (KM)',
    stageBgColors: ['#14121B', '#1D2429'],
    planetImageSrc: Neptune,
    imageAlign: 'left',
    planetThemeColor: PALETTE.blue[70],
    isImgAnimating: true,
  },
  {
    stageName: '블랙홀',
    distanceFromEarth: '28,382,192,331,358,680 + (KM)',
    stageBgColors: ['#000000', '#14121B'],
    planetImageSrc: BlackHole,
    imageAlign: 'center',
    planetThemeColor: COLOR.common.black,
    isImgAnimating: false,
  },
]
