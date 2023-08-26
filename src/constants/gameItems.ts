import { theme } from '@/styles'

// GameMain 페이지에서 사용, 공통요소
export const GameMainCommon = {
  buttonText: 'Explore More',
  InfoText: '프로그램 안내',
} as const

// GameMain 페이지에서 사용, 좌우 분리 영역에서 각각 사용
export const GameMainAlign = {
  left: {
    titleText: 'Hello, Artemis!',
    mainHeadingText: '오늘 만난 달님에게 인사해보세요!',
    imgSrc: 'assets/img/FlagMoon.svg',
    identity: 'Hello, Artemis ~!',
    bodyTexts: [
      '기분 좋은 인사말을 깃발에 적어주세요.',
      '"KOOSMOOS" 가 달 표면에 그 깃발을 꽂아 놓고 오겠습니다.!',
      '다른 사람들의 깃발을 구경해도 좋아요.',
      '모든 일은 달이 밝은 면에서만 가능합니다.',
      '오늘 어두워 보이는 곳도 한 달 안에는 분명 다시 밝아질 겁니다.!',
    ],
    mainColor: theme.PALETTE.yellow[100],
    secondaryColor: theme.PALETTE.yellow[70],
  },
  right: {
    titleText: '나의 별 빛',
    mainHeadingText: '"나" 는 어느 쪽 하늘에서 빛나고 있나요?',
    imgSrc: 'assets/img/CelestialBodies.svg',
    identity: '심리-천체 유형 검사',
    bodyTexts: [
      '검사 시간은 총 10분입니다.',
      '현재의 내면 심리와 유사한 특성을 가진 천체이미지를 출력해드립니다.',
      'SNS 공유 기능을 활용하여 검사자님만의 천체를 홍보해보세요!',
      '인간의 성격을 5가지의 상호독립적인 요인으로 설명하는 "BIG 5 이론" 에 근거합니다.',
    ],
    mainColor: theme.PALETTE.blue[100],
    secondaryColor: theme.PALETTE.blue[70],
  },
} as const
