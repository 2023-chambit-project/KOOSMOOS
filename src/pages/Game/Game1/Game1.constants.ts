import type { FlagProp, MoonProp } from '@/types'

export const moonRadius = 90
export const subCircleRadius = moonRadius * 1.2

export const createFlagTemplate: FlagProp = {
  id: -1,
  writer: '★',
  greeting: '',
  img_src: 'https://source.unsplash.com/random/?supernova',
  posX: 0,
  posY: 0,
}

export const flagWhenNewmoon: FlagProp = {
  id: -1,
  writer: 'KOOSMOOS',
  greeting: '오늘은 달 없는 밤 🥹',
  img_src: 'https://source.unsplash.com/random/300x300/?moon',
  posX: 0,
  posY: 0,
}

export const flagWhenFetchFailure: FlagProp = {
  id: -1,
  writer: 'KOOSMOOS',
  greeting: '죄송합니다.. 데이터를 받지 못했습니다.',
  img_src: 'https://source.unsplash.com/random/300x300/?moon',
  posX: 0,
  posY: 0,
}

export const moonShapeToKorean: Record<MoonProp, string> = {
  newMoon: '초하루',
  waxingCrescent: '초승달',
  firstQuarter: '하현달',
  waxingGibbous: '하현달 -> 보름달',
  fullMoon: '보름달',
  waningGibbous: '보름달 -> 상현달',
  thirdQuarter: '상현달',
  waningCrescent: '그믐달',
} as const
